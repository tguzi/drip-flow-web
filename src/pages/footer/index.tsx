import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  background: rgba(153, 153, 153, .5);
  line-height: 30px;
  text-align: center;
`

export default () => (
  <Footer>
    &copy; 版权所有
  </Footer>
)
