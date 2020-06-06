// 根据路径导出文件
export const _require = (path: string) => () => require(path)
export const _import = (file: string)=> () => import(file)
