import React, { SFC, useRef } from 'react'
import styled from 'styled-components'
import Masonry from './masonry'
import Item from './item'

type TProps = Partial<{
  column: number;
  gap: string;
}>

interface IBound {
  masonryEl: any;
  masonryRect: any;
  el: any;
  elRect: any;
}

const Wrap = styled.section`
  position: relative;
  margin: 25px 0;
  column-count: 3;
  &::after {
    clear: both;
  }
`

const Waterfall: SFC<TProps> = ({
  children
}) => {
  const boxRef = useRef(null)

  const clientBound = (bound: IBound) => {
    // console.log('props: ', bound.el.offsetWidth)
  }

  return (
    <Wrap ref={boxRef}>
      {
        React.Children.map(children, (child: any) => {
          const dName = child?.type?.displayName
          // 不是子元素不渲染
          if (dName !== 'Masonry') {
            return null
          }
          return <Item getClientBound={clientBound}>{child}</Item>
        })
      }
    </Wrap>
  )
}

Waterfall.defaultProps = {
  column: 3,
  gap: '10px'
}

export const MasonryItem = Masonry

export default Waterfall
