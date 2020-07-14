import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'
import { encodeId } from 'utils/'

const MenuWrap = styled.nav`
  position: absolute;
  width: 180px;
  padding: 10px 0;
  background-color: #fff;
  border: 1px solid rgba(177, 180, 185, 0.45);
`

const MenuItem = styled.li<any>`
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
  span {
    margin-left: 9.6px;
  }
  &:hover {
    background-color: hsla(0, 0%, 94.9%, 0.5);
  }
`

const Menu = ({ id }: any) => {
  const history = useHistory()

  const gotoUserDetail = (id: number) => {
    history.push(`/user/${encodeId(id)}`)
  }
  return (
    <MenuWrap>
      <MenuItem onClick={() => gotoUserDetail(id)}>
        <Icon ico="user" />
        <span>个人信息</span>
      </MenuItem>
      <MenuItem>
        <Icon ico="sign-out" />
        <span>登出</span>
      </MenuItem>
    </MenuWrap>
  )
}

export default Menu
