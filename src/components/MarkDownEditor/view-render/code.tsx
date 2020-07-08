import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
// 主题样式
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IProps {
  value: string;
}

const CodeBlock: React.SFC<IProps> = ({
  value
}) => (
  <SyntaxHighlighter style={tomorrowNightEighties}>
    {value}
  </SyntaxHighlighter>
)

CodeBlock.defaultProps = {
  value: ''
}

export default CodeBlock
