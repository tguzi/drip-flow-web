// 根据路径导出文件
export function _import (path: string) {
  return () => require(path).default()
}
