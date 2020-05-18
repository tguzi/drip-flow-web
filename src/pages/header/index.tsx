import React from 'react'
import styled from 'styled-components'

import logo from 'imgs/logo.jpg'

const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  padding: 5px 50px;
  box-shadow: 5px 5px 5px #eee;
`

const LogoEl = styled.img`
  height: 100%;
`

const Slogan = styled.span`

`

const Header = () => (
  <HeaderEl>
    <LogoEl src={logo} />
    <Slogan>拾聿，拾谷，拾未然</Slogan>
    <ul>
      <li>随记</li>
      <li>两周一题</li>
      <li>未解之谜</li>
    </ul>
  </HeaderEl>
)

export default Header
