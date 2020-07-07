const merge = (...objs: any[]) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        // eslint-disable-next-line no-prototype-builtins
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k]
        return acc
      }, {}),
    {}
  )

export default function mergeConfig(config1: any, config2: any) {
  return merge(config1, config2)
}
