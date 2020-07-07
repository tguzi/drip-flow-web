import ask from '../Ask'
import createAttempt from 'src/Ask/retry'

ask.interceptors.response.use(
  (response: any) => {
    if (response.ok) {
      response.json().then((data: any) => {
        if (data.code === '200') {
          return data.data
        } else {
          return Promise.reject(data.message || '系统异常')
        }
      })
    } else {
      return Promise.reject('系统异常')
    }
  },
  (err: any) => {
    return Promise.reject(err)
  }
)
// 请求
const request = (url: string, init: RequestInit) => {
  const config = {
    path: url,
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
