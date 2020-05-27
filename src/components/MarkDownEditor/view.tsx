import React from 'react'
import ReactMarkDown from 'react-markdown'
import toc from 'remark-toc'

import CodeBlock from './codeBlock'

interface IProps {
  content: string, // 显示内容
}

// markdown 编辑器
const MarkDownView: React.SFC<IProps> = ({
  content,
  ...slot
}) => (
  <ReactMarkDown
    escapeHtml={false}
    source={content}
    skipHtml={false}
    plugins={[toc]}
    renderers={{ code: CodeBlock }}
    {...slot}
  />
)

MarkDownView.defaultProps = {
  content: '',
}

export default MarkDownView
