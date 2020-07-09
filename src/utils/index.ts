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
