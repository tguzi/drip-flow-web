import React from 'react'
import ReactMarkDown from 'react-markdown/with-html'
import 'github-markdown-css'

import CodeBlock from './codeBlock'

interface IProps {
  content: string, // 显示内容
}

// markdown 编辑器
const MarkDownView: React.SFC<IProps> = ({
  content,
  children,
  ...slot
}) => {
  return (
    <ReactMarkDown
      escapeHtml={false}
      skipHtml={false}
      source={content}
      renderers={{
        code: CodeBlock
      }}
    />
  )
}

MarkDownView.defaultProps = {
  content: '',
}

export default MarkDownView
