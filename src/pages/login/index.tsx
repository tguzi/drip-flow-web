// import React, { Fragment, useState, useEffect } from 'react'
// // import { useDispatch } from 'react-redux'
// import styled from 'styled-components'

// // import Input from '../../components/Input'
// // import Button from '../../components/Button'
// import Flex from '../../components/Flex'

// // import svg_phone from '../../assets/login/icon_shouji.svg'
// // import svg_password from '../../assets/login/icon_mima.svg'

// // import { validatePhone, validatePassword } from '../../utils/validate'
// // import { setWindowSize } from '../../remote/common'
// // import * as actions from '../../actions/user'
// // import Theme from '../../utils/theme'
// // import { encodePwd } from '../../utils'

// const ModeBox = styled(Flex)`
//   margin-top: 20px;
//   width: 100%;
//   font-size: 14px;
//   span {
//     -webkit-app-region: no-drag;
//     /* color: ${Theme.color.light}; */
//     cursor: pointer;
//   }
// `

// const PhonePassword = () => {

//   // redux
//   const dispatch = useDispatch()

//   // 手机号
//   const [phone, setPhone] = useState('')
//   // 密码
//   const [password, setPassword] = useState('')
//   // 手机号格式校验
//   const verifyPhone = Boolean(validatePhone(phone) && phone)
//   // 密码格式校验
//   const verifyPassword = Boolean(validatePassword(password) && password)

//   // 是否可以点击提交
//   const canSubmit = (password && !verifyPassword) && (phone && !verifyPhone)

//   return (
//     <Fragment>
//       <Input
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         icon={svg_phone}
//         verify={verifyPhone}
//         error="手机号码格式错误"
//         placeholder="请输入手机号"
//       />
//       <Input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         icon={svg_password}
//         placeholder="请输入6-20位密码"
//         type="password"
//         verify={verifyPassword}
//         error="密码格式错误"
//         onKeyPress={() => {
//           if (!canSubmit) return
//           dispatch({
//             type: actions.LOGIN,
//             payload: {
//               phone: phone,
//               userPassword: encodePwd(password),
//             }
//           })
//         }}
//       />
//       <Button
//         theme={canSubmit ? 'primary' : 'disabled'}
//         onClick={() => {
//           dispatch({
//             type: actions.LOGIN,
//             payload: {
//               phone: phone,
//               userPassword: encodePwd(password),
//             }
//           })
//         }}
//       >登录</Button>
//       <ModeBox justify="space-between">
//         <span />
//         <span onClick={() => {
//           dispatch({
//             type: actions.SET_LOGIN_CONTENT,
//             payload: 'forgetPassword'
//           })
//         }}>忘记密码？</span>
//       </ModeBox>
//     </Fragment>
//   )
// }

// export default PhonePassword

import React from 'react'

const Login = () => {
  return (
    <div>111</div>
  )
}

export default Login
