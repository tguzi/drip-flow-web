import React from 'react'
import DefaultInput from './defaultInput'
import UnderLineInput from './underLineInput'

type InputType = 'border' | 'underline'

export type Props = {
  palceholder?: string;
  type?: InputType;
  htmlType?: string;
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
