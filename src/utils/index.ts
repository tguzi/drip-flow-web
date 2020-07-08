// 根据路径导出文件
export const _require = (path: string) => () => require(path)
export const _import = (file: string)=> () => import(file)

// 节流
export function throttle(fn: any, wait = 200) {
  // let prev = new Date().getTime()
  // return function (...args: any[]) {
  //   const now = new Date().getTime()
  //   if (now - prev > wait) {
  //     fn?.apply(null, args)
  //     prev = new Date().getTime()
  //   }
  // }
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
export function debounch(fn: any, wait: number) {
  let timer: number
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn?.apply(null, args)
    }, wait)
  }
}
