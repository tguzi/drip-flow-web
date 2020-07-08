import React from 'react'
import { IHeadingProps } from '../types'

// 锚点
const Anchor: React.SFC<any> = ({ level, children, ...props }) => React.createElement(`h${level}`, props, children)

const Heading: React.SFC<IHeadingProps> = ({
  level,
  children,
  onAnchorChange,
}) => {
  if (children && children.length > 0) {
    const item = children[0].props
    // 设置锚点地图
    onAnchorChange({
      title: item.value,
      key: item.nodeKey
    })
    return <Anchor level={level} id={item.nodeKey}>{children}</Anchor>
  } else {
    return <React.Fragment>{children}</React.Fragment>
  }
}

Heading.defaultProps = {
  level: 1,
  onAnchorChange: () => { }
}

export default Heading
