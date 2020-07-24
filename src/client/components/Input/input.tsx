import React, { Component } from 'react'
import { Container, InputSelf, UnderContainer, HrContainer } from './styled'
type InputType = 'border' | 'underline'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: InputType;
}

export interface InputState {
  value: any;
}

const HrBox = () => (
  <HrContainer>
    <hr className="default-hr" />
    <hr className="active-hr" />
  </HrContainer>
)

class Input extends Component<InputProps, InputState> {
  // 后续static 补充静态组件
  renderUnderLine = () => {
    return (
      <UnderContainer>
        <InputSelf {...this.props} />
        <HrBox />
      </UnderContainer>
    )
  }
  renderInput = () => {
    return (
      <Container>
        <InputSelf {...this.props} />
      </Container>
    )
  }

  renderComponent = () => {
    const { inputType } = this.props
    if (inputType === 'underline') {
      return this.renderUnderLine()
    }
    return this.renderInput()
  }

  render() {
    return <>{this.renderComponent()}</>
  }
}
export default Input
