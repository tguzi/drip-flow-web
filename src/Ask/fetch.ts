import createAttempt from './retry'

export default function fetchAdapter(config: any) {
  // return new Promise(function dispatchFetchRequest(resolve, reject) {
  var requestData = config.data
  var requestHeaders = config.headers

  var timeout = config.timeout

  var maxAttempts = config.maxAttempts
  var attemptDelay = config.attemptDelay

  // 省略数据预处理操作
  var options = {
    method: config.method.toUpperCase(),
    headers: requestHeaders,
    body: JSON.stringify(requestData),
  }

  var fullPath = config.baseUrl + config.url

  function singleRequest() {
    const timeoutPromise = new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        reject(new Error('timeout'))
      }, timeout)
    })

    return new Promise((resolve, reject) => {
      try {
        Promise.race([fetch(fullPath, options), timeoutPromise]).then(
          (res) => {
            console.log(123, res)
            resolve((res as any).json())
          }
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  if (maxAttempts === 1) {
    return singleRequest()
  } else {
    return Promise.resolve(
      createAttempt(singleRequest, maxAttempts, attemptDelay)
    )
  }
}
