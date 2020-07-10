import { altSessionStorageState } from 'hooks/useStorage/useSessionStorageState'

// 响应拦截
const interceptorResponse = ((res: Response) => {
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('request error')
  }
})

// 超时判断
const timeout = (fetchFn: Promise<any>) => {
  const promsie: any = new Promise((_, reject) => {
    setTimeout(() => { reject(new Error('timeout')) }, 5000)
  })
  return Promise.race([fetchFn, promsie])
}

// 请求
const request = (url: string, init: RequestInit) => {
  const [userInfo] = altSessionStorageState('userInfo')
  console.log('userInfo: ', userInfo)
  return timeout(fetch(`http://129.226.171.102:8080${url}`, init).then(interceptorResponse))
}

export const get = (url: string, init?: RequestInit) => request(url, { ...init, method: 'GET' })

export const post = (url: string, init: RequestInit) => request(url, { ...init, method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' } })

export default request
