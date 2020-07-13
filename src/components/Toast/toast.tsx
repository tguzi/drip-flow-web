import React, { SFC } from 'react'
import { Wrap, Container } from './styled'

const Toast: SFC = ({
  children
}) => (
  <Wrap>
    <Container>{children}</Container>
  </Wrap>
)

Toast.defaultProps = {}

export default Toast
