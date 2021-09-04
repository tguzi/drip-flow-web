const env = process.env.NODE_ENV

const domain: any = {
  development: {
    baseUrl: '//localhost:8080/api'
  },
  production: {
    baseUrl: '//api.dripflows.cn/api'
  }
}

const config = {
  env,
  isDev: Boolean(env === 'development'),
  ...domain[env]
}

export default config
