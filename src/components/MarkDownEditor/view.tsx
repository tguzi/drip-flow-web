import React, { useState } from 'react'
import ReactMarkDown from 'react-markdown/with-html'
import 'github-markdown-css'

import CodeBlock from './view-render/code'
import TableBlock from './view-render/table'
import HeadingBlock from './view-render/heading'

interface IProps {
  content: string, // 显示内容
  handleAnchorChange?: Function, // 锚点内容变化
}

interface IAnchor {
  [propName: string]: Object
}

// markdown 编辑器
const MarkDownView: React.SFC<IProps> = ({
  content,
  handleAnchorChange,
  ...slot
}) => {

  // 处理navbar
  const [anchorMap, setAnchorMap] = useState<IAnchor>({})

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
            anchorMap={anchorMap}
            handleAnchorChange={(map: IAnchor) => {
              setAnchorMap(map)
              handleAnchorChange && handleAnchorChange(Object.values(map))
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
