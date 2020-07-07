import React from 'react'
import { Container, UnderContainer, InputSelf, HrContainer } from './styled'

type InputType = 'border' | 'underline'

type Props = {
  palceholder?: string;
  type?: InputType;
  htmlType?: string;
}

const DefaultInput = ({ palceholder, htmlType }: Props) => (
  <Container>
    <InputSelf placeholder={palceholder} type={htmlType} />
  </Container>
)

const HrBox = () => (
  <HrContainer>
    <hr className="default-hr" />
    <hr className="active-hr" />
  </HrContainer>
)
const UnderLineInput = ({ palceholder, htmlType }: Props) => {
  return (
    <UnderContainer>
      <InputSelf placeholder={palceholder} type={htmlType} />
      <HrBox />
    </UnderContainer>
  )
}

const Input = ({ palceholder, type, htmlType }: Props) => {
  return type === 'underline' ? (
    <UnderLineInput palceholder={palceholder} htmlType={htmlType} />
  ) : (
    <DefaultInput palceholder={palceholder} htmlType={htmlType} />
  )
}

Input.defaultProps = {
  type: 'border',
}

export default Input
