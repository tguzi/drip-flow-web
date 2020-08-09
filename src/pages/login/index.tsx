import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Input from 'components/Input'
import Button from 'components/Button'
import toast from 'components/Toast'
import { useSessionStorageState } from 'hooks/useStorage/useSessionStorageState'
import { encodePwd } from '@tgu/utils'
import { post } from 'utils/request'

import {
  Wrap,
  Slogan,
  Container,
  Title,
  Form,
  InputBox,
  Label,
  Tip
} from './styled'

const Login = () => {

  const [userInfo, setUserInfo] = useSessionStorageState<any>('userInfo', {})
  const [nickname, setNickname] = useState(userInfo?.nickname)
  const [password, setPassword] = useState('')
  const history = useHistory()
  const location = useLocation()

  const onLoginClick = async () => {
    try {
      const res = await post('/user/login', { body: JSON.stringify({ nickname, password: encodePwd(password) }) })
      if (res?.data) {
        setUserInfo(res?.data)
        const state: any = location?.state
        history.push(state?.successJump ?? '/')
      } else {
        toast(res?.message)
      }
    } catch (e) {
      console.log('登录出错', e)
      toast('登录出错')
    }
  }

  return (
    <Wrap>
      <Container>
        <Title>
          登录
          <Slogan>在为梦想涂上颜色的时候，手上也会沾满梦想</Slogan>
        </Title>
        <Form>
          <InputBox>
            <Label>用户名</Label>
            <Input
              placeholder="请输入用户名"
              inputType="underline"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputBox>
          <InputBox className="mt8">
            <Label>密码</Label>
            <Input
              placeholder="请输入密码"
              inputType="underline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          <Button onClick={onLoginClick}>登录</Button>
          <Tip> 加这个微信号(btoa): d3FmMTI0，一起加入我们吧！</Tip>
        </Form>
      </Container>
    </Wrap>
  )
}

export default Login
