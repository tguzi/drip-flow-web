import React from 'react';
import styled from 'styled-components';
import Flex from '../components/Flex/index';

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 1100px;
  height: 80px;
  margin: 20px auto 0;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 15px -7px rgba(0, 0, 0, 0.09);
  z-index: 1;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #eee;
  cursor: pointer;
`;

const Author = styled.div`
  margin-left: 15px;
  line-height: 1.5;
  h3 {
    font-weight: normal;
    color: #333;
    font-size: 18px;
    letter-spacing: 1.2px;
  }
  p {
    font-size: 12px;
    color: #999;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin-left: 50px;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 20px;
  flex: none;
  color: #999;
  text-transform: uppercase;
  transition: color 0.25s linear;
  cursor: pointer;
  &.active {
    color: #555;
  }
  &:hover {
    color: #777;
  }
`;

const avatarUrl =
  'http://demo.qzhai.net/cell/wp-content/uploads/2020/01/stock-photo-1005217204-100x100.png';

const HeaderBar = () => {
  return (
    <Header>
      <Flex width="auto">
        <Avatar src={avatarUrl} />
        <Author>
          <h3>DirpFlow</h3>
          <p>frivolous的博客小站</p>
        </Author>
      </Flex>
      <Nav>
        <NavItem className="active">首页</NavItem>
        {/* <NavItem>札记</NavItem>
        <NavItem>两周一话</NavItem> */}
      </Nav>
    </Header>
  );
};

export default HeaderBar;
