const env = process.env.NODE_ENV

const domain: any = {
  development: {
    baseUrl: 'http://api.dripflows.cn/api'
  },
  production: {
    baseUrl: 'http://api.dripflows.cn/api'
  }
}

const config = {
  env,
  isDev: Boolean(env === 'development'),
  ...domain[env]
}

export default config
