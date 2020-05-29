import React from 'react'
import ReactMarkDown from 'react-markdown/with-html'
import 'github-markdown-css'

import CodeBlock from './view-render/code'
import TableBlock from './view-render/table'

interface IProps {
  content: string, // 显示内容
}

// markdown 编辑器
const MarkDownView: React.SFC<IProps> = ({
  content,
  ...slot
}) => {
  return (
    <ReactMarkDown
      escapeHtml={false}
      skipHtml={false}
      source={content}
      renderers={{
        code: CodeBlock,
        table: TableBlock,
      }}
      {...slot}
    />
  )
}

MarkDownView.defaultProps = {
  content: '',
}

export default MarkDownView
