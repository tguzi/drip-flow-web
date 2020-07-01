import React, { SFC } from 'react'
import styled from 'styled-components'

type TProps = Partial<{
  el: string;
  ellipsis: boolean;
  size: string;
  color: string;
  weight: string;
  line: number | string;
}>

const Wrap = styled.span<TProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  line-height: ${(props) => props.line};
  &.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const Text: SFC<TProps> = ({
  children,
  el,
  ellipsis,
  ...slotProps
}) => (
    <Wrap
      className={ellipsis ? 'ellipsis my__text' : 'my__text'}
      {...slotProps}
    >{children}</Wrap>
  )

Text.defaultProps = {
  el: 'span',
  ellipsis: true,
  size: 'inherit',
  color: 'inherit',
  weight: 'inherit',
  line: 1,
}

export default Text
