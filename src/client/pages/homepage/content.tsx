import React from 'react'
import styled from 'styled-components'
import Waterfall, { MasonryItem } from '../../components/Waterfall'
import Tag from '../../components/Tag'

const Wrap = styled.div`
  width: 360px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02);
  background: #fff;
  color: #666;
`

const Label = styled.span`
  height: 18px;
  margin-bottom: 5px;
  line-height: 18px;
`

const Time = styled.time`
  margin-left: 10px;
  font-size: 12px;
  color: #aaa;
`

const Title = styled.h2`
  width: 100%;
  margin: 10px 0;
  font-size: 18px;
  letter-spacing: 1px;
  color: #333;
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  font-weight: normal;
  text-overflow: ellipsis;
  cursor: pointer;
`

const Cover = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.02);
  border-radius: 8px;
  cursor: pointer;
  img {
    width: 100%;
    transition: all 0.25s linear;
    float: left;
    &:hover {
      transform: scale(1.2);
    }
    &::after {
      clear: both;
    }
  }
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
  const noNull = list?.length
  return (
    <Waterfall>
      {
        noNull ? list.map((v, k) => (
          <MasonryItem key={k}>
            <Wrap>
              <Label>
                <Tag text={v.tag} />
                <Time>{v.time}</Time>
              </Label>
              <Title title={v.title}>{k}. {v.title}</Title>
              <Cover><img src={v.cover} alt={v.title} title={`${v.tag}-${v.title}`} /></Cover>
            </Wrap>
          </MasonryItem>
        )) : (
          <div>空空如也</div>
        )
      }
    </Waterfall>
  )
}

export default Content
