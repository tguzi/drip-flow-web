export function isUrl(url: string): boolean {
  const reg = /^https?\:\/\//
  return reg.test(url)
}