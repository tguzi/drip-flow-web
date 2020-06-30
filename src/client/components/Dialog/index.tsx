import React, { SFC, useEffect } from 'react'
import ReactDom from 'react-dom'
import { DialogBox } from './styled'

interface IProps {
  visiable: boolean
}

type TProps = Partial<{
  
}> & IProps

const Dialog: SFC<TProps> = ({
  visiable,
  children,
  ...slotProps
}) => {

  // 判断是否有
  if (!visiable) return null

  const protalEl = document.querySelector('#protal')

  const el = document.createElement('div')

  useEffect(() => {
    protalEl?.appendChild(el)
    return () => {
      protalEl?.removeChild(el)
    }
  }, [])

  return ReactDom.createPortal(
    <DialogBox className={`my__dialog`} {...slotProps}>{children}</DialogBox>,
    el
  )
}

Dialog.defaultProps = {
  visiable: false
}

export default Dialog