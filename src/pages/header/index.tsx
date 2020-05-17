import React from 'react'
import styled from 'styled-components'

import logo from 'imgs/tgu.png'

const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  box-shadow: 5px 5px 5px #eee;
`

const LogoEl = styled.img`

`

const Header = () => (
  <HeaderEl>
    11112
    <LogoEl src={logo} />
  </HeaderEl>
)

export default Header
