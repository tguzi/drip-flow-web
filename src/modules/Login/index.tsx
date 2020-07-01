import React from 'react'
import { Container, Title, InputBox, Label, Tip } from './styled'
import Input from 'components/Input'
import Button from 'components/Button'

type Props = {
  visible: boolean;
}

const Login = () => (
  <Container>
    <Title>登录</Title>
    <InputBox>
      <Label>邮箱</Label>
      <Input />
    </InputBox>
    <InputBox>
      <Label>密码</Label>
      <Input />
    </InputBox>
    <Button>登录</Button>
    <Tip> 没有账号，联系站长给个账号加入我们哦 微信号: xxxx</Tip>
  </Container>
)

export default Login
