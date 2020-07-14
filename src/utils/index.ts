import moment from 'moment'

const CONFUSION = 'tguzi'

// 根据路径导出文件
export const _require = (path: string) => () => require(path)
export const _import = (file: string)=> () => import(file)

// 节流
export function throttle(fn: Function, wait = 200) {
  if (typeof fn !== 'function') {
    return () => {}
  }
  let timer: number
  return function (...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        fn?.apply(null, args)
        clearTimeout(timer)
        timer = 0
      }, wait)
    }
  }
}

// 防抖
export function debounch(fn: Function, wait: number) {
  if (typeof fn !== 'function') {
    return () => {}
  }
  let timer: number
  function zhix (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn?.apply(null, args)
    }, wait)
  }
  return zhix
}

// 密码加密
export function encodePwd(str: string) {
  if (typeof str !== 'string') {
    return str
  }
  let out = ''
  for (const c of str) {
    out += c.charCodeAt(0) - 20
  }
  return out
}

// id加密
export function encodeId(id: number) {
  try {
    const str = `${CONFUSION}-${id}`
    return window.btoa(window.encodeURIComponent(str))
  } catch (e) {
    return ''
  }
}

// id解密
export function decodeId(str: string) {
  try {
    const originStr = window.atob(window.decodeURIComponent(str))
    return originStr.split('-')[1]
  } catch (e) {
    return ''
  }
}

export function isFunction<T>(obj: any): obj is T {
  return typeof obj === 'function'
}

export function timeFormat(time: string) {
  return moment(time).format('YYYY年MM月DD日 hh:mm:ss')
}

export function dataToString(date: Date): string {
  return date.toString()
}
