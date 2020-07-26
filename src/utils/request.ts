import TguFetch from '@tgu/fetch'
import config from 'config/index'
import { altSessionStorageState } from 'hooks/useStorage/useSessionStorageState'
import toast from 'components/Toast'

// 请求拦截器
TguFetch.interceptors.request.use((config: any) => {
  if (config.method === 'POST') {
    config.headers = {
      ...config.headers,
      'content-type': 'application/json; charset=utf-8'
    }
  }
  const [userInfo] = altSessionStorageState<any>('userInfo')
  config.headers = {
    ...config.headers,
    'authorization': `Bearer ${userInfo?.token}`
  }
  return config
}, (err: Error) => {
  toast(`请求出错${err.message}`)
})

// 响应拦截器
TguFetch.interceptors.response.use((res: Response) => {
  return res
}, (err: Error) => {
  toast(`服务器异常${err.message}`)
})

TguFetch.setConfig({
  baseURL: config.baseUrl
})

const request = TguFetch.request

export const get = (url: string, init?: RequestInit) => request({ ...init, method: 'GET', url })

export const post = (url: string, init: RequestInit) => request({ ...init, method: 'POST', url })

export const put = (url: string, init: RequestInit) => request({ ...init, method: 'PUT', url })

export default request
