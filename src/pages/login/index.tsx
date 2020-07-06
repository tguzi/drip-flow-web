import React from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import { post } from 'fetch/index'

import { Wrap, Slogan, Container, Title, Form, InputBox, Label, Tip } from './styled'

function onLoginClick() {
  post('http://129.226.171.102:8080/api/user/login', {
    body: JSON.stringify({
      nickname: '1213123',
      password: '123456'
    })
  }).then(res => {
    console.log('res: ', res)
  }).catch(err => {
    console.log('err: ', err)
  })
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
          <Input palceholder="请输入邮箱" type="underline" />
        </InputBox>
        <InputBox className='mt8'>
          <Label>密码</Label>
          <Input palceholder="请输入邮箱" type="underline" />
        </InputBox>
        <Button onClick={onLoginClick}>登录</Button>
        <Tip> 欢迎加入我们!微信号: wqf124</Tip>
      </Form>
    </Container>
  </Wrap>
)

export default Login
