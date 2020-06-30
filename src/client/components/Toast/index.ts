import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'

let el: Element

// 创建消息提醒
const createNotification = (content: string) => {
  el = document.createElement('div')
  document.body.appendChild(el)
  // const container: any= (<Toast>111</Toast>)
  // ReactDOM.render(container, el)
  // ReactDOM.render(<div>111</div>, el)
}

// 销毁消息提醒
const destroyNotification = () => {
  if (!el) return
  document.body.removeChild(el)
  ReactDOM.unmountComponentAtNode(el)
}

// 消息提示
const notice = (content: string, duration = 1000) => {
  // 保证只显示一个提示
  if (el) return null
  createNotification(content)
  // 设置持续时间后，自动关闭提示
  if (duration) {
    setTimeout(() => {
      destroyNotification()
    }, duration)
  }
  // 暴露出关闭提示的方法，可以主动关闭提示
  return {
    handleClose: destroyNotification
  }
}

export default notice