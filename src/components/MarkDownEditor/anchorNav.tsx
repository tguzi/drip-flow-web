import React from 'react'
import styled from 'styled-components'

interface IAnchorList {
  anchor: string,
  title: string,
  level: number,
}

interface IProps {
  list: Array<IAnchorList>
}

const Box = styled.dl`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 10px;
  line-height: 20px;
  background: #abcdef;
  box-shadow: 10px 10px 10px #efefef;
  color: rgba(255, 255, 255, .5);
`

const AnchorNav: React.SFC<IProps> = ({
  list
}) => {
  console.log('list: ', list)

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
