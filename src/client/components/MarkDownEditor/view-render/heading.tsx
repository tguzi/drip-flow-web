import React from 'react'

interface IProps {
  level: number,
  children: any,
  anchorMap: any,
  handleAnchorChange: any,
}

// 锚点
const Anchor: React.SFC<any> = ({ level, children, ...props }) => React.createElement(`h${level}`, props, children)

const Heading: React.SFC<IProps> = ({
  level,
  children,
  anchorMap,
  handleAnchorChange,
}) => {
  if (children && children.length > 0) {
    const item = children[0].props
    // 设置锚点地图
    if (!anchorMap[item.nodeKey]) {
      anchorMap[item.nodeKey] = {
        level,
        title: item.value,
        anchor: item.nodeKey
      }
      handleAnchorChange(anchorMap)
    }
    return <Anchor level={level} id={item.nodeKey}>{children}</Anchor>
  } else {
    return <React.Fragment>{children}</React.Fragment>
  }
}

Heading.defaultProps = {
  level: 1,
  handleAnchorChange: () => {}
}

export default Heading
