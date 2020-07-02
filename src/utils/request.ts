interface IRequestOptions {
  uri: string, // 请求地址
  method?: string, // 请求方式
  body?: object, // body内容
  header?: object, // header内容
}

class Fetch {
  constructor () {}

  // 基础请求路径
  // TODO: 移出去放到config中，作为可配置项，gitignore忽略config文件，后续不上传这种具体配置信息
  private BASE_URL = ''

  // 默认参数
  private defaultParams = {}

  /**
   * 处理fetch请求参数
   * @private
   * @template T
   * @param {T} options
   * @returns {T}
   */
  private diposeOptions <T> (options: T): T {
    return options
  }

  /**
   * 封装request
   * @param {IRequestOptions} options
   * @returns {Fetch}
   */
  // public request (options: IRequestOptions): Fetch {
    // return fetch(options.uri)
  // }

}

export const fetch = new Fetch()

export default Fetch