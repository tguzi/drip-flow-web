import React from 'react'
import { Container, UnderContainer, InputSelf, HrContainer } from './styled'

type InputType = 'border' | 'underline'

type Props = {
  palceholder?: string;
  type?: InputType;
}

const DefaultInput = ({ palceholder }: Props) => (
  <Container>
    <InputSelf placeholder={palceholder} />
  </Container>
)

const HrBox = () => (
  <HrContainer>
    <hr className="default-hr"/>
    <hr className="active-hr" />
  </HrContainer>
)
const UnderLineInput = ({ palceholder }: Props) => {
  return (
    <UnderContainer>
      <InputSelf placeholder={palceholder} />
      <HrBox />
    </UnderContainer>
  )
}

const Input = ({ palceholder, type }: Props) => {
  return type === 'underline' ? (
    <UnderLineInput palceholder={palceholder} />
  ) : (
    <DefaultInput palceholder={palceholder} />
  )
}

Input.defaultProps = {
  type: 'border',
}

export default Input
