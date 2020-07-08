import React from 'react'
import { UnderContainer, InputSelf, HrContainer } from './styled'
import { Props } from './index'

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

export default UnderLineInput
