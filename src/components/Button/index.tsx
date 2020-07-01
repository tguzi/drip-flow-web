import React, { SFC } from 'react'
import { Container, ButtonSelf } from './styled'

type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger' | 'link' | 'text'

type Props = {
  // TODO: 设置按钮类型
  type?: ButtonType;
  disabled: boolean;
  width: string;
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}

const Button: SFC<any> = ({ children }) => (
  <Container>
    <ButtonSelf>{children}</ButtonSelf>
  </Container>
)

export default Button
