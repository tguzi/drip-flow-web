import React, { useState } from 'react'
import ReactMarkDown from 'react-markdown/with-html'

import { IViewProps, IAnyKey } from './types'
import CodeBlock from './view-render/code'
import TableBlock from './view-render/table'
import HeadingBlock from './view-render/heading'

// markdown 编辑器 预览
const MarkDownView: React.SFC<IViewProps> = ({
  content,
  handleAnchorChange,
  ...slot
}) => {
  const [anchorNav, setAnchorNav] = useState<IAnyKey>({})

  return (
    <ReactMarkDown
      escapeHtml={false}
      skipHtml={false}
      source={content}
      renderers={{
        code: CodeBlock,
        table: TableBlock,
        heading: ({ level, children }) => (
          <HeadingBlock
            onAnchorChange={(anchor: any) => {
              anchorNav[anchor.key] = anchor
              setAnchorNav(anchorNav)
              handleAnchorChange && handleAnchorChange(anchorNav)
            }}
            level={level}
            children={children}
          />
        ),
      }}
      {...slot}
    />
  )
}

MarkDownView.defaultProps = {
  content: '',
  handleAnchorChange: () => {},
}

export default MarkDownView
