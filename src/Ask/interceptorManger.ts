import { AskInterceptor } from './types'
import utils from './utils'
class InterceptorManger<V> {
  private handlers: AskInterceptor<V>[]

  constructor() {
    this.handlers = []
  }
  use(
    onFulfilled?: (value: V) => V | Promise<V>,
    onRejected?: (error: any) => any
  ): number {
    this.handlers.push({
      fulfilled: onFulfilled,
      rejected: onRejected,
    })
    return this.handlers.length - 1
  }

  eject(id: number) {
    if (this.handlers[id]) {
      delete this.handlers[id]
    }
  }

  forEach(fn: Function) {
    utils.forEach(this.handlers, function forEachHandler(h: any) {
      if (h !== null) {
        fn(h)
      }
    })
  }
}

export default InterceptorManger
