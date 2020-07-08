import React from 'react'
import { Container, InputSelf } from './styled'
import { Props } from './index'

const DefaultInput = ({ palceholder, htmlType }: Props) => (
  <Container>
    <InputSelf placeholder={palceholder} type={htmlType} />
  </Container>
)

export default DefaultInput
