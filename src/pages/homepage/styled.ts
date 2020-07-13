import styled from 'styled-components'

export const Wrap = styled.section`
  width: 100%;
`

export const Box = styled.div`
  width: 360px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02);
  background: #fff;
  color: #666;
`

export const Label = styled.span`
  height: 18px;
  margin-bottom: 5px;
  line-height: 18px;
`

export const Time = styled.time`
  margin-left: 10px;
  font-size: 12px;
  color: #aaa;
`

export const Title = styled.h2`
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
  &:hover {
    color: #666;
  }
`

export const Cover = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02);
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

export const AddBlogBtn = styled.button`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 50px;
  height: 50px;
  transition: all 0.25s linear;
  border-radius: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  border: none;
  background: #37c2ff;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  outline: none;
  &::after {
    content: '+';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: #67d1ff;
    transform: scale(1.2);
  }
  &:active {
    background: #37c2ff1a;
  }
`
