import React from 'react'
import styled from 'styled-components'

// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }

interface ISlot {
  width?: string,
  flex?: string,
  wrap?: string,
  basis?: string,
  grow?: number,
  shrink?: number,
  self?: string,
  direction?: string,
  align?: string,
  justify?: string,
}

// type TSlot = Partial<ISlot>

interface IProps extends ISlot {
  children: React.ReactNode,
  // el: never
}

const Container = styled.div < ISlot > `
  display: flex;
  width: ${props => props.width};
  flex: ${props => props.flex};
  flex-wrap: ${props => props.wrap};
  flex-basis: ${props => props.basis};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  align-self: ${props => props.self};
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`

const Flex: React.SFC<IProps> = ({
  children,
  // el,
  ...slot
}) => (
  <Container className="my__flex" {...slot}>{children}</Container>
)

Flex.defaultProps = {
  // el: undefined,
  width: '100%',
  flex: 'initial',
  wrap: 'auto',
  basis: 'auto',
  grow: 0,
  shrink: 1,
  self: 'auto',
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
}

export default Flex
