import React, { SFC } from 'react'
import styled from 'styled-components'

type TProps = Partial<{
  theme: string;
  width: string;
  height: string;
  radius: string;
  font: string;
  color: string;
}>

const Wrap = styled.button<TProps>`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.font};
  color: ${(props) => props.color};
  &.text {
    background: transparent;
    width: auto;
    height: auto;
  }
`

const Button: SFC<TProps> = ({
  children,
  theme,
  ...slotProps
}) => (
  <Wrap className={`${theme} my__button`} {...slotProps}>{children}</Wrap>
)

Button.defaultProps = {
  theme: 'default',
  width: '100%',
  height: '40px',
  radius: '20px',
  font: 'inhreit',
  color: '#fff',
}

export default Button