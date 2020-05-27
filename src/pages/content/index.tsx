import React from 'react'
import styled from 'styled-components'
import MarkDownEditor from 'src/components/MarkDownEditor'

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fff;
`

export default () => {

  return (
    <Content>
      <MarkDownEditor />
    </Content>
  )
}
