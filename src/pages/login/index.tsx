import React from 'react'
import Input from 'components/Input'
import Button from 'components/Button'

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

const onLoginClick = async () => {
  try {
    if (!valiAccount) {
      return
    }
    const res = await login({
      nickname: '1213123',
      password: '123456',
    })
    console.log(res)
  } catch (error) {
    console.error(error)
  }
}

const valiAccount = () => {
  return true
}

const Login = () => (
  <Wrap>
    <Container>
      <Title>
        登录
        <Slogan>在为梦想涂上颜色的时候，手上也会沾满梦想</Slogan>
      </Title>
      <Form>
        <InputBox>
          <Label>邮箱</Label>
          <Input placeholder="请输入邮箱" inputType="underline" />
        </InputBox>
        <InputBox className="mt8">
          <Label>密码</Label>
          <Input
            placeholder="请输入邮箱"
            inputType="underline"
            type="password"
          />
        </InputBox>
        <Button onClick={onLoginClick}>登录</Button>
        <Tip> 没有账号?联系站长给个账号加入我们吧!微信号: xxxx</Tip>
      </Form>
    </Container>
  </Wrap>
)

export default Login
