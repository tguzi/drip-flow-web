import { IOptions, IFetch, TInitConfig, IInterceptor } from './types'

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
class Fetch {

  constructor(props?: TInitConfig) {
    // base config
    this.baseUrl = props?.baseUrl || ''
    this.timeout = props?.timeout || 5000
  }

  private baseUrl: string

  private timeout: number

  private interceptors: any[] = []

  /**
   * get base config
   * @returns 
   */
  public getBaseConfig() {
    return {
      baseUrl: this.baseUrl,
      timeout: this.timeout
    }
  }

  /**
   * add interceptor
   * @param {IInterceptor} interceptor
   */
  public addInterceptor(interceptor: IInterceptor) {
    this.interceptors.push(interceptor)
  }

  /**
   * final fetch request
   * @param {string} url
   * @param {RequestInit} [init]
   * @returns {Promise<Response>}
   */
  public request(url: string, init?: RequestInit, options?: any): Promise<Response> {
    // return fetch(url, init).then(interface)
    console.log('options: ', options)
    return fetch(url, init)
  }

  /**
   * fetch request interceptor
   * @param {IFetch} fetch
   * @param {IOptions} options
   * @returns 
   */
  public interceptor(fetch: IFetch, options: IOptions) {
    const reversedInterceptors = this.interceptors.reduce((array, interceptor) => [...[interceptor], array])
    let promise = Promise.resolve(options)
    reversedInterceptors.forEach(({ request, requestError }: any) => {
      if (request || requestError) {
        promise = promise.then(opt => request(opt.input, opt.init), requestError)
      }
    })
    let responsePromise = promise.then(opt => fetch(opt.input, opt.init))
    reversedInterceptors.forEach(({ response, responseError }: any) => {
      if (response || responseError) {
        responsePromise = responsePromise.then((res: Response) => {
          return response(res)
        })
      }
    })
    return responsePromise
  }

  /**
   * fetch request timeout
   * @param {IFetch} fetchFn
   * @param {number} timer
   * @returns 
   */
  // public timeout(fetchFn: IFetch, timer: number) {
  //   const timeoutFn = setTimeout(() => {
  //     Promise.reject(new Error('timeout'))
  //   }, timer)
  //   return Promise.race([fetchFn, timeoutFn])
  // }

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
        fn().then(resolve).catch((err: Error) => {
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

export default Fetch

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