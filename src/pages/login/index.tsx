import React, { useState } from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import { useAsync } from 'hooks/index'

import {
  Wrap,
  Slogan,
  Container,
  Title,
  Form,
  InputBox,
  Label,
  Tip,
} from './styled'
import { login } from 'api'

const Login = () => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const { execute } = useAsync(
    () =>
      login({
        nickname,
        password,
      }),
    false
  )

  const onLoginClick = async () => {
    // TODO: 账号密码校检

    await execute()

    // TODO: 路由跳转

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
              placeholder="请输入邮箱"
              inputType="underline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          <Button onClick={onLoginClick}>登录</Button>
          <Tip> 没有账号?联系站长给个账号加入我们吧!微信号: xxxx</Tip>
        </Form>
      </Container>
    </Wrap>
  )
}

export default Login
