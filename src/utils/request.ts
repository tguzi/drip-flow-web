import ask from '../Ask'
import createAttempt from 'src/Ask/retry'

ask.interceptors.request.use((config: any) => {
  config.baseUrl = 'http://api.dripflows.cn'
  return config
})

ask.interceptors.response.use(
  (response: any) => {
    return new Promise((resolve, reject) => {
      if (response.code === '200') {
        resolve(response.data)
      } else {
        reject(response.message || '系统异常')
      }
    })
  },
  (err: any) => {
    return Promise.reject(err)
  }
)
// 请求
const request = (url: string, init: RequestInit) => {
  const config = {
    url,
    ...init,
  }
  return ask.request(config)
}

export const get = (url: string, init: RequestInit) =>
  request(url, { ...init, method: 'GET' })

export const post = (url: string, init: any) =>
  request(url, {
    ...init,
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })

export const retry = (fn: any, url: string, init: any) => {
  const singleRequest = () => fn(url, init)
  return function (times: number, delay: number) {
    return createAttempt(singleRequest, times, delay)
  }
}

export default request
