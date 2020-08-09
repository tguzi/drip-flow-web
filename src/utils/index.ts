import { isNull } from '@tgu/utils'
const CONFUSION = 'tguzi'

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

// 空值传参过滤
export function nullValueFilter<T>(obj: T): T {
  for (const k in obj) {
    if (isNull(obj[k])) {
      delete obj[k]
    }
  }
  return obj
}

// Assembling parameters/
export function assemblingObj(obj: any, baseName?: string): string {
  let paramsArray: Array<string> = []
  if (obj) {
    Object.keys(obj).forEach(key => paramsArray.push(key + '=' + obj[key]))
  }
  if (!paramsArray?.length) {
    return baseName || ''
  }
  if (baseName?.search(/\?/) === -1) {
    return `${baseName ? `${baseName}?` : ''}${paramsArray.join('&')}`
  } else {
    return `${baseName ? `${baseName}&` : ''}${paramsArray.join('&')}`
  }
}
