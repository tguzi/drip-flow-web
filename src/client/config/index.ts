const env = process.env.NODE_ENV

const domain: any = {
  development: {
    baseUrl: 'http://dripflows.cn:8080/api'
  },
  production: {
    aiNodeUrl: 'http://dripflows.cn:8080/api'
  }
}

const config = {
  env,
  isDev: Boolean(env === 'development'),
  ...domain[env as any]
}

export default config
