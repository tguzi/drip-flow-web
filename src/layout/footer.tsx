import React from 'react'
import styled from 'styled-components'

const Wrap = styled.footer`
  width: 1100px;
  margin: 20px auto;
  font-size: 12px;
  line-height: 1.25;
  color: #999;
  letter-spacing: 1.2px;
`

const Line = styled.hr`
  border: none;
  line-height: 0;
  margin-bottom: 20px;
  &::after {
    content: '';
    margin: 0 auto;
    display: inline-block;
    width: 100px;
    max-width: 100%;
    border-top: 1px solid #cacaca;
    vertical-align: top;
  }
`

const Footer = () => {
  return (
    <Wrap>
      <Line />
      <span>&copy;2020 T谷子 版权所有</span>
      &nbsp;
      {/* <span>备案号xxx</span> */}
    </Wrap>
  )
}

export default Footer
