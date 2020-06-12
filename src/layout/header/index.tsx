import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'

import Flex from 'components/Flex'
import logo from 'imgs/logo.jpg'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 5px 50px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  box-shadow: 5px 5px 5px #eee;
`

const Keynote = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  margin: 10px 20px;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.25);
    color: #abcdef;
  }
  &.active {
    color: #abcdef;
  }
`

const Website = styled.div`
  width: 300px;
  /* cursor: pointer; */
`

const navList = [{
  path: '/',
  label: '首页'
}, {
  path: '/reading-notes',
  label: '札记'
}, {
  path: '/half-month-topic',
  label: '两周一话'
}]

export default () => {

  const history = useHistory()
  const location = useLocation()

  return (
    <Header>
      <Keynote>
        <img src={logo} alt="tgu"/>
        {/* <span>拾聿，拾谷，拾未然</span> */}
      </Keynote>
      <NavList justify="space-around">
        {
          navList.map(v => (
            <NavItem
              onClick={() => history.push(v.path)}
              key={v.path}
              className={v.path === location.pathname ? 'active' : 'normal'}
            >
              {v.label}
            </NavItem>
          ))
        }
      </NavList>
      <Website />
      {/* <Website>网站详情</Website> */}
    </Header>
  )
}
