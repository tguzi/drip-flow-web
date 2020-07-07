import React from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import { post } from '../../utils/request'

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

function onLoginClick() {
  post('http://129.226.171.102:8080/api/user/login', {
    maxAttempts: 3,
    attemptDelay: 3000,
    data: {
      nickname: '1213123',
      password: '123456',
    },
  })
    .then((res: any) => {
      console.log('res', res)
    })
    .catch((e: Error) => {
      console.error('e:', e)
    })
  // retry(post, 'http://129.226.171.102:8080/api/user/login', {
  //   data: {
  //     nickname: 'sillyY',
  //     password: 'liuyu',
  //   },
  // })(3, 3000)
  //   .then((res) => {
  //     console.log('res', res)
  //   })
  //   .catch((e) => {
  //     console.error('e: ', e)
  //   })
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
        <InputBox className="mt8">
          <Label>密码</Label>
          <Input palceholder="请输入邮箱" type="underline" />
        </InputBox>
        <Button onClick={onLoginClick}>登录</Button>
        <Tip> 没有账号?联系站长给个账号加入我们吧!微信号: xxxx</Tip>
      </Form>
    </Container>
  </Wrap>
)

export default Login
