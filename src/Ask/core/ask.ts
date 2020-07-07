import {
  AskInterceptorManager,
  AskRequestConfig,
  AskResponse,
} from '../types'
import InterceptorManger from '../interceptorManger'
import dispatchRequest from '../dispatchRequest'
import mergeConfig from '../mergeConfig'

// body: JSON.stringify(data), // must match 'Content-Type' header
// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// credentials: 'same-origin', // include, same-origin, *omit
// headers: {
// 'user-agent': 'Mozilla/4.0 MDN Example',
// 'content-type': 'application/json'
// },
// method: 'POST', // *GET, POST, PUT, DELETE, etc.
// mode: 'cors', // no-cors, cors, *same-origin
// redirect: 'follow', // manual, *follow, error
// referrer: 'no-referrer', // *client, no-referrer

/**
 * 有兼容性问题，在ie上存在无法使用的风险
 * @class Fetch
 */
class Ask {
  constructor(instanceConfig?: AskRequestConfig) {
    // base config
    this.defaults = instanceConfig
    this.interceptors = {
      request: new InterceptorManger(),
      response: new InterceptorManger(),
    }
  }
  private defaults: AskRequestConfig | undefined

  public interceptors: {
    request: AskInterceptorManager<AskRequestConfig>;
    response: AskInterceptorManager<AskResponse>;
  }

  /**
   * final fetch request
   * @param {string} url
   * @param {RequestInit} [init]
   * @returns {Promise<Response>}
   */
  public request(config: any): Promise<any> {
    // return fetch(url, init).then(interface)

    config = mergeConfig(this.defaults, config)

    var chain = [dispatchRequest, undefined]
    var promise = Promise.resolve(config)

    this.interceptors.request.forEach(function unshiftRequestInterceptors(
      interceptor: any
    ) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })
    this.interceptors.response.forEach(function pushResponseInterceptors(
      interceptor: any
    ) {
      chain.push(interceptor.fulfilled, interceptor.rejected)
    })

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift())
    }

    return promise
  }

  /**
   * retry fetch
   * @param {Function} fn
   * @param {number} times
   * @param {number} delay
   * @returns
   */
  public retry(fn: Function, times: number, delay: number) {
    return new Promise((resolve, reject) => {
      function attempt() {
        fn()
          .then(resolve)
          .catch((err: Error) => {
            if (times <= 0) {
              reject(err)
            } else {
              times--
              setTimeout(() => {
                attempt()
              }, delay)
            }
          })
      }
      attempt()
    })
  }

  /**
   * abort fetch
   * @param {IFetch} fetch
   */
  public cancel() {
    // const controller = new AbortController()
    // const signal = controller.signal
    // controller.abort()
  }
}

export default Ask

// export class FetchInterceptor {
//   public interceptors: any[] = [];
//   public interceptor(
//     fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
//     options: { input: RequestInfo, init?: RequestInit | undefined })
//   {
//     const reversedInterceptors = this.interceptors.reduce((array, interceptor) => [...[interceptor], array]);
//     let promise = Promise.resolve(options);
//     reversedInterceptors.forEach(({ request, requestError }: any) => {
//       if (request || requestError) {
//         promise = promise.then(opt => request(opt.input, opt.init), requestError);
//       }
//     });
//     let responsePromise = promise.then(opt => fetch(opt.input, opt.init));
//     reversedInterceptors.forEach(({ response, responseError }: any) => {
//       if (response || responseError) {
//         responsePromise = responsePromise.then((resp: Response) => {
//           return response(resp);
//         });
//       }
//     });
//     return responsePromise;
//   }
// }

// fetchInterceptor.interceptors.push({
//   request: (input: string, init: RequestInit) => {
//     const token = store.getters.getToken;
//     let headers = new Headers(init.headers);
//     headers.append('Authorization', 'Bearer ' + token);
//     init.headers = headers;
//     return { input, init };
//   }
// }, {
//   response: (response: Response) => {
//     if (response.status === 401) {
//       router.replace('signin');
//     }
//     return response;
//   }
// });

// export const fetchInterceptor = new FetchInterceptor();
