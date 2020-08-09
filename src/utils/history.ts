import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const push = history.push.bind(history)

export const replace = history.replace.bind(history)

export const go = history.go.bind(history)

export const back = history.goBack.bind(history)

export const forward = history.goForward.bind(history)

export const createHref = history.createHref.bind(history)

export const location = history.location

export const action = history.action

// export const unlisten = history.listen((listenr) => {
//   const { action, location } = listenr
//   console.log('监听路由变化: ', action, location)
//   if (history.location.pathname === location.pathname) {
//     return
//   }
// })

export default history
