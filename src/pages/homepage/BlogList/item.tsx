import React from 'react'
import styled from 'styled-components'

const Content = styled.section`
  width: 100%;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px dashed rgba(210, 210, 210, .5);
  transition: all linear .25s;
  &:hover {
    background: rgba(245, 245, 245, .5);
  }
`

const Title = styled.h2`
  font-size: 20px;
  line-height: 2;
`

const Info = styled.div`
  text-align: right;
  font-size: 12px;
  line-height: 2;
`

const Name = styled.span`
  margin-right: 20px;
`

const Item = () => (
  <Content>
    <Title>博客标题</Title>
    <Info>
      <Name>吴清福</Name>
      <span>2020-02-14</span>
    </Info>
  </Content>
)

export default Item
