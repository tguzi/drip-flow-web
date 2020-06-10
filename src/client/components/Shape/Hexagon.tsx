import React, { SFC } from 'react'
import styled from 'styled-components'

interface IShape {
  width: number;
  color: string;
}

const defaultProps = {
  width: 50,
  color: '#abcdef'
}

type TProps = Partial<typeof defaultProps>

const Shape = styled.div<IShape>`
  position: relative;
  width: ${({width}) => `${width}px`};
  height: ${({width}) => `${Math.sqrt(3) * width}px`};
  margin: ${({width}) => `${width}px auto`};
  background: ${({color}) => color};
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: ${({width}) => `${width}px`};
    border-width: ${({width}) => `${Math.sqrt(3) * width / 2}px ${width / 2}px`};
    border-style: solid;
    border-color: ${({color}) => `transparent ${color} transparent transparent`};
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: ${({width}) => `${width}px`};
    border-width: ${({width}) => `${Math.sqrt(3) * width / 2}px ${width / 2}px`};
    border-style: solid;
    border-color: ${({color}) => `transparent transparent transparent ${color}`};
  }
`

const Hexagon: SFC<TProps> = ({
  width = 50,
  color = '#abcdef',
  children
}) => <Shape width={width} color={color}>{children}</Shape>

export default Hexagon
