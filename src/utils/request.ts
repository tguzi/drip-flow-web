import TguFetch from '@tgu/fetch'
import config from 'config/index'
import { altSessionStorageState } from 'hooks/useStorage/useSessionStorageState'
import toast from 'components/Toast'
import history from 'utils/history'
import { nullValueFilter, assemblingObj } from 'utils/index'

const [userInfo, setUserInfo] = altSessionStorageState<any>('userInfo')

interface IResponse {
  code: number;
  data: any;
  message: string;
}

// 请求拦截器
TguFetch.interceptors.request.use((config: any) => {
  if (config.method === 'POST') {
    config.headers = {
      ...config.headers,
      'content-type': 'application/json; charset=utf-8'
    }
  }
  // const [userInfo] = altSessionStorageState<any>('userInfo')
  config.headers = {
    ...config.headers,
    'authorization': `Bearer ${userInfo?.token}`
  }
  return config
}, (err: Error) => {
  toast(`请求出错${err.message}`)
})

// 响应拦截器
TguFetch.interceptors.response.use((res: IResponse) => {
  switch (res.code) {
    case 401:
      // 登录信息过期，重新登录
      setUserInfo({})
      toast('用户登录信息过期，请重新登录')
      history.push('/login', {
        successJump: location.pathname
      })
      break
    default:
      break
  }
  return res
}, (err: Error) => {
  toast(`服务器异常${err.message}`)
})

TguFetch.setConfig({
  baseURL: config.baseUrl
})

/**
 * 请求封装
 * @param init
 */
const request = (
  method: string,
  url: string,
  data?: any,
  init?: RequestInit
) => {
  const requestParams = nullValueFilter(data)
  let requestUrl = url
  let requestInit: RequestInit = { method, ...init }
  // 自动把请求参数注入到init中
  switch (method) {
    case 'GET':
      requestUrl = assemblingObj(requestParams, url)
      break
    case 'POST':
      requestInit.body = JSON.stringify(requestParams)
      break
    default:
      break
  }
  return TguFetch.request({...requestInit, url: requestUrl})
}

export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')

export default request
