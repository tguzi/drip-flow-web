import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import logo from 'imgs/logo.jpg'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 5px #eee;
`

const Keynote = styled(Flex)`
  width: 300px;
  height: 100%;
  img {
    height: 100%;
  }
`

const NavList = styled(Flex)`
  width: 300px;
  list-style: none;
`

const NavItem = styled.li`
  margin: 10px;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.25);
    color: #abcdef;
  }
`

const Website = styled.div`
  cursor: pointer;
`

export default () => (
  <Header>
    <Keynote>
      <img src={logo} alt="tgu"/>
      {/* <span>拾聿，拾谷，拾未然</span> */}
    </Keynote>
    <NavList
      justify="space-around"
      align="center"
    >
      <NavItem>札记</NavItem>
      <NavItem>两周一话</NavItem>
    </NavList>
    <Website>
      网站详情
    </Website>
  </Header>
)
