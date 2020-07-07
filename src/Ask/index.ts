import Ask from './core/ask'
import defaults from './defaults'
import utils from './utils'
import { AskRequestConfig } from './types'

function createInstance(defaultConfig: AskRequestConfig): any {
  var context = new Ask(defaultConfig)
  // eslint-disable-next-line @typescript-eslint/unbound-method
  var instance = utils.bind(Ask.prototype.request, context)

  utils.extend(instance, Ask.prototype, context)

  utils.extend(instance, context)

  return instance
}

var ask = createInstance(defaults)

export default ask
