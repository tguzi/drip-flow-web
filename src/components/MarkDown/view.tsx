import React, { useState } from 'react'
import ReactMarkDown from 'react-markdown/with-html'

import { IViewProps, IAnyKey } from './types'
import HeadingBlock from './view-render/heading'
import { ViewWrap } from './viewStyle'

// markdown 编辑器 预览
const MarkDownView: React.SFC<IViewProps> = ({
  content,
  handleAnchorChange,
  ...slot
}) => {
  const [anchorNav, setAnchorNav] = useState<IAnyKey>({})

  return (
    <ViewWrap className="content-html">
      <ReactMarkDown
        escapeHtml={false}
        skipHtml={false}
        source={content}
        renderers={{
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
    </ViewWrap>
  )
}

MarkDownView.defaultProps = {
  content: '',
  handleAnchorChange: () => {},
}

export default MarkDownView
