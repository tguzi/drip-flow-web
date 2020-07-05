// // interface IRequestOptions {
// //   uri: string, // 请求地址
// //   method?: string, // 请求方式
// //   body?: object, // body内容
// //   header?: object, // header内容
// // }

// // class Fetch {
// //   constructor () {}

// //   // 基础请求路径
// //   // TODO: 移出去放到config中，作为可配置项，gitignore忽略config文件，后续不上传这种具体配置信息
// //   private BASE_URL = ''

// //   // 默认参数
// //   private defaultParams = {}

// //   /**
// //    * 处理fetch请求参数
// //    * @private
// //    * @template T
// //    * @param {T} options
// //    * @returns {T}
// //    */
// //   private diposeOptions <T> (options: T): T {
// //     return options
// //   }

// //   /**
// //    * 封装request
// //    * @param {IRequestOptions} options
// //    * @returns {Fetch}
// //    */
// //   public request (options: IRequestOptions): Fetch {
// //     return fetch(options.uri)
// //   }

// // }

// // export const fetch = new Fetch()

// // export default Fetch

// // interface IFetchRequest {
// //   input: RequestInfo;
// //   init?: RequestInit;
// // }

// class Fetch {

//   constructor(init: any) {
//     console.log('初始化请求信息')
//   }

//   public interceptors: any[] = []

//   /**
//    * 拦截器
//    * @param {(input: RequestInfo, init?: RequestInit) => Promise<Response>} fetch
//    * @param {{ input: RequestInfo, init?: RequestInit }} options
//    */
//   public interceptor(
//     fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>,
//     options: { input: RequestInfo, init?: RequestInit }
//   ) {
//     const reversedInterceptors = this.interceptors.reduce((array, interceptor) => [...[interceptor], array])
//     let promise = Promise.resolve(options)
//     reversedInterceptors.forEach(({ request, requestError }: any) => {
//       if (request || requestError) {
//         promise = promise.then(opt => request(opt.input, opt.init), requestError)
//       }
//     })
//     let responsePromise = promise.then(opt => fetch(opt.input, opt.init))
//     reversedInterceptors.forEach(({ response, responseError }: any) => {
//       if (response || responseError) {
//         responsePromise = responsePromise.then((res: Response) => {
//           return response(res)
//         })
//       }
//     })
//     return responsePromise
//   }

//   public request(options: RequestInfo, init?: RequestInit): Promise<Response> {
//     return fetch(options, init)
//   }

// }

// // export class FetchInterceptor {
// //   public interceptors: any[] = [];
// //   public interceptor(
// //     fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
// //     options: { input: RequestInfo, init?: RequestInit | undefined })
// //   {
// //     const reversedInterceptors = this.interceptors.reduce((array, interceptor) => [...[interceptor], array]);
// //     let promise = Promise.resolve(options);
// //     reversedInterceptors.forEach(({ request, requestError }: any) => {
// //       if (request || requestError) {
// //         promise = promise.then(opt => request(opt.input, opt.init), requestError);
// //       }
// //     });
// //     let responsePromise = promise.then(opt => fetch(opt.input, opt.init));
// //     reversedInterceptors.forEach(({ response, responseError }: any) => {
// //       if (response || responseError) {
// //         responsePromise = responsePromise.then((resp: Response) => {
// //           return response(resp);
// //         });
// //       }
// //     });
// //     return responsePromise;
// //   }
// // }

// // window.fetch = ((fetch) => {
// //   return (input: RequestInfo, init?: RequestInit | undefined) => {
// //     return fetchInterceptor.interceptor(fetch, { input, init });
// //   };
// // })(window.fetch);

// // fetchInterceptor.interceptors.push({
// //   request: (input: string, init: RequestInit) => {
// //     const token = store.getters.getToken;
// //     let headers = new Headers(init.headers);
// //     headers.append('Authorization', 'Bearer ' + token);
// //     init.headers = headers;
// //     return { input, init };
// //   }
// // }, {
// //   response: (response: Response) => {
// //     if (response.status === 401) {
// //       router.replace('signin');
// //     }
// //     return response;
// //   }
// // });

// // export const fetchInterceptor = new FetchInterceptor();