import React from 'react'
import { Container, Title, Form, InputBox, Label, Tip } from './styled'
import Input from 'components/Input'
import Button from 'components/Button'

type Props = {
  visible: boolean;
}

function onLoginClick() {
  console.log(123)
}

const Login = () => (
  <Container>
    <Title>登录</Title>
    <Form>
      <InputBox>
        <Label>邮箱</Label>
        <Input palceholder="请输入邮箱" type="underline" />
      </InputBox>
      <InputBox className='mt8'>
        <Label>密码</Label>
        <Input />
      </InputBox>
      <Button onClick={onLoginClick}>登录</Button>
      <Tip> 没有账号，联系站长给个账号加入我们哦 微信号: xxxx</Tip>
    </Form>
  </Container>
)

export default Login
