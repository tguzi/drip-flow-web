import React from 'react'
import styled from 'styled-components'
import Item from './item'

const Wrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0;
`

const list = [
  {
    title: '2020年初随笔',
    tag: '心情随笔',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-500x281.jpg'
  }, {
    title: '我想走遍世界每一个角落',
    tag: '旅行日记',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/03/casual-cute-female-friends-206409-scaled-500x333.jpg'
  }, {
    title: '剪影流殇，光影华年剪影流殇，光影华年剪影流殇，光影华年',
    tag: '心情随笔',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg'
  }, {
    title: '我想走遍世界每一个角落',
    tag: '旅行日记',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/selective-focus-photography-of-cherry-blossoms-1023953-scaled-500x332.jpg'
  }, {
    title: '2020年初随笔',
    tag: '心情随笔',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-500x281.jpg'
  }, {
    title: '我想走遍世界每一个角落',
    tag: '旅行日记',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/03/casual-cute-female-friends-206409-scaled-500x333.jpg'
  }, {
    title: '剪影流殇，光影华年剪影流殇，光影华年剪影流殇，光影华年',
    tag: '心情随笔',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg'
  }, {
    title: '我想走遍世界每一个角落',
    tag: '旅行日记',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/selective-focus-photography-of-cherry-blossoms-1023953-scaled-500x332.jpg'
  }, {
    title: '2020年初随笔',
    tag: '心情随笔',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-500x281.jpg'
  }, {
    title: '我想走遍世界每一个角落',
    tag: '旅行日记',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/03/casual-cute-female-friends-206409-scaled-500x333.jpg'
  }, {
    title: '剪影流殇，光影华年剪影流殇，光影华年剪影流殇，光影华年',
    tag: '心情随笔',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg'
  }, {
    title: '我想走遍世界每一个角落',
    tag: '旅行日记',
    time: '2020/02/01',
    cover: 'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/selective-focus-photography-of-cherry-blossoms-1023953-scaled-500x332.jpg'
  }
]

const Content = () => {
  return (
    <Wrap>
      { list.map((v, k) => (
        <Item
          key={k}
          tag={v.tag}
          title={v.title}
          cover={v.cover}
          time={v.time}
        />
      ))}
    </Wrap>
  )
}

export default Content
