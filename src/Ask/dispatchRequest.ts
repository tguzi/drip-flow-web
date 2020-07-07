import { defaults } from 'codemirror'
import { AskRequestConfig, AskResponse } from './types'

export default function dispatchRequest(config: AskRequestConfig): AskResponse {
  var adapter = config.adapter || defaults.adapter

  return adapter(config).then(
    function onAdapterResolution(response: any) {
      return response
    },
    function onAdapterRejection(reason: any) {
      return Promise.reject(reason)
    }
  )
}
