function createAttempt(fn: any, times: number, delay: number) {
  return new Promise((resolve, reject) => {
    function attempt() {
      fn()
        .then(resolve)
        .catch((err: Error) => {
          if (times <= 0) {
            reject(err)
          } else {
            times--
            setTimeout(() => {
              attempt()
            }, delay)
          }
        })
    }
    attempt()
  })
}

export default createAttempt
