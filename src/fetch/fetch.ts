import { IOptions, IFetch, TRequestParams, IInterceptor } from './types'
import { isUrl } from 'utils/validate'

/**
 * 有兼容性问题，在ie上存在无法使用的风险
 * @class Fetch
 */
class Fetch {

  constructor(props?: TRequestParams) {
    // base config
    this.baseUrl = props?.baseUrl || ''
    this.timeout = props?.timeout || 5000
    this.defaultContentType = props?.contentType || 'json'
    // set content type
    this.CONTENT_TYPE.set('json', 'application/json;charset=utf-8')
    this.CONTENT_TYPE.set('form', 'application/x-www-form-urlencoded;charset=utf-8')
    this.CONTENT_TYPE.set('multipart', 'multipart/form-data;boundary=----WebKitFormBoundarykkrZ5yIY8cr0hdgE')
  }

  // default params
  private readonly baseUrl: string
  private readonly timeout: number
  private readonly defaultContentType: string

  // base content type
  private readonly CONTENT_TYPE = new Map()

  // request response interceptor
  // private requestInterceptor: any
  // private responseInterceptor: any
  private interceptors: any[] = []

  private readonly defaultInit: RequestInit = {
    method: 'GET',
    headers: {},
    body: null,
    mode: 'cors', // cors/no-cors/same-origin
    credentials: 'same-origin', // omit/same-origin/include/FederatedCredential/PasswordCredential
    cache: 'default', // default/no-store/reload/no-cache/force-cache/only-if-cached
    redirect: 'follow', // follow/error/manual
    referrer: 'client', // no-referrer/client/url地址,
    referrerPolicy: '', // no-referrer/no-referrer-when-downgrade/origin/origin-when-cross-origin/unsafe-url
    integrity: '', // 请求的subresource integrity值
  }

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
   * registry request interceptor
   * @param {*} interceptor
   */
  public useRequestInterceptor(interceptor: any) {
    this.requestInterceptor = interceptor
  }

  /**
   * registry response interceptor
   * @param {*} interceptor
   */
  public useResponseInterceptor(interceptor: any) {
    this.responseInterceptor = interceptor
  }

  private responseInterceptor() {}

  private requestInterceptor() {}

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
  public request(url: string, init?: RequestInit, options?: TRequestParams): Promise<Response> {
    const uri = isUrl(url) ? url : `${options?.baseUrl}${url}`
    // console.log('options: ', options)
    return fetch(uri, init)
  }

  /**
   * json to url params
   * @private
   * @param {*} data
   * @returns {string}
   */
  private jsonToUrlParams(data: any): string {
    return Object.keys(data)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
      .join('&')
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
   * @returns 
   */
  public timeoutFn(fetchFn: IFetch) {
    const promsie = new Promise((_, reject) => {
      setTimeout(() => { reject(new Error('timeout')) }, this.timeout || 5000)
    })
    return Promise.race([fetchFn, promsie])
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
   * 取消
   * @param {AbortController} controller
   * @param {Function} cb
   */
  public cancel(controller: AbortController, cb: Function) {
    controller?.abort()
    cb()
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

// const fetch = new Fetch()

// fetch.useRequestInterceptor((res: any) => {
//   console.log('res', res)
// })

// export const fetchInterceptor = new FetchInterceptor();