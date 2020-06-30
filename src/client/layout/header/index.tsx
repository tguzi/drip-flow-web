import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Flex from '../../components/Flex';
// import logo from '../../static/imgs/logo.jpg'

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 5px #eee;
`;

const Keynote = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 100%;
  img {
    height: 100%;
  }
`;

const NavList = styled(Flex)`
  width: 300px;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 10px;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.25);
    color: #abcdef;
  }
`;

const Website = styled.div`
  cursor: pointer;
`;

export default () => {
  return (
    <Header>
      <Keynote>
        {/* <img src={logo} alt="tgu"/> */}
        {/* <span>拾聿，拾谷，拾未然</span> */}
      </Keynote>
      <NavList>
        <NavItem>
          <NavLink to="/">首页</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/reading-notes">札记</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/half-month-topic">两周一话</NavLink>
        </NavItem>
      </NavList>
      <Website>网站详情</Website>
    </Header>
  );
};
