import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  text: string;
}

const Wrap = styled.span`
  display: inline-block;
  padding: 0 10px;
  background: #1e87f0;
  line-height: 1.5;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 3px;
  font-size: 12px;
  background-color: #ffcd26;
`

const Tag: SFC<IProps> = ({
  text
}) => (
  <Wrap>{text}</Wrap>
)

Tag.defaultProps = {

}

export default Tag
