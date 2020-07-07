function getDefaultAdapter() {
  var adapter
  if (typeof fetch !== 'undefined') {
    adapter = require('./fetch').default
  } else {
    console.log('Not support fetch')
  }
  return adapter
}

var defaults = {
  url: '',
  adapter: getDefaultAdapter(),
  timeout: 1000,
  maxAttempts: 1,
  attemptDelay: 0,
}

export default defaults
