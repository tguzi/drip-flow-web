import React, { SFC } from 'react'
import styled from 'styled-components'
import Tag from '../../components/Tag'

interface IProps {
  title: string;
  tag: string;
  time: string;
  cover: string;
}

const Wrap = styled.div`
  width: 360px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02);
  background: #fff;
  color: #666;
  &:nth-of-type(3n+2) {
    margin: 0 10px 10px;
  }
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

const Item: SFC<IProps> = ({
  title,
  tag,
  time,
  cover,
}) => {
  return (
    <Wrap>
      <Label>
        <Tag text={tag} />
        <Time>{time}</Time>
      </Label>
      <Title title={title}>{title}</Title>
      <Cover><img src={cover} alt={title} title={`${tag}-${title}`} /></Cover>
    </Wrap>
  )
}

export default Item
