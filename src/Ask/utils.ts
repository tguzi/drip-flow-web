function isArray(val: any) {
  return toString.call(val) === '[object Array]'
}

function forEach(obj: any, fn: Function) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj]
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj)
      }
    }
  }
}
function bind(fn: any, thisArg: any) {
  return function wrap() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      // eslint-disable-next-line prefer-rest-params
      args[i] = arguments[i]
    }
    return fn.apply(thisArg, args)
  }
}

function extend(a: any, b: any, thisArg?: any) {
  forEach(b, function assignValue(val: any, key: any) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg)
    } else {
      a[key] = val
    }
  })
  return a
}

export default {
  isArray: isArray,
  forEach: forEach,
  extend: extend,
  bind: bind
}