import React from 'react'
import styled from 'styled-components'
import { IAnchorProps } from './types'

const Box = styled.dl`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 10px;
  line-height: 20px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px rgb(245, 245, 245);
  color: rgba(255, 255, 255, .5);
`

const AnchorNav: React.SFC<IAnchorProps> = ({
  list
}) => {

  if (!list || !list.length) {
    return null
  }
  return (
    <Box>
      {
        list.map((v) => {
          if (v.level === 1) {
            return (
              <dt key={v.anchor}>
                <a href={`#${v.anchor}`}>{v.title}</a>
              </dt>
            )
          } else {
            return (
              <dd key={v.anchor} className={`tab-${v.level}`}>
                <a href={`#${v.anchor}`}>{v.title}</a>
              </dd>
            )
          }
        })
      }
    </Box>
  )
}

AnchorNav.defaultProps = {
  list: []
}

export default AnchorNav
