import React, { useRef, useEffect, SFC } from 'react'
import styled from 'styled-components'

type TItemProps = {
  getClientBound: Function;
}

const Wrap = styled.div`
  height: 100%;
  overflow: hidden;
  break-inside: avoid-column;
  page-break-inside: avoid;
`

const Item: SFC<TItemProps> = ({
  children,
  getClientBound
}) => {
  const ref = useRef(null)
  useEffect(() => {
    // 获取当前元素的位置信息
    if (ref.current) {
      const masonryEl: any = ref.current
      const masonryRect = masonryEl.getBoundingClientRect()
      const el = masonryEl.childNodes[0]
      const elRect = el.getBoundingClientRect()
      getClientBound({masonryEl, masonryRect, el, elRect})
    }
  }, [ref])
  return <Wrap ref={ref}>{children}</Wrap>
}

export default Item
