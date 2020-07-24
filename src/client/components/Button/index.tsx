import React, { SFC, MouseEventHandler } from 'react'
import { Container, ButtonSelf } from './styled'

type Props = {
  // TODO: 补充其他API
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: SFC<Props> = ({ children, onClick }) => {
  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    if (onClick) {
      ;(onClick as MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e)
    }
  }
  return (
    <Container>
      <ButtonSelf onClick={handleClick}>{children}</ButtonSelf>
    </Container>
  )
}

export default Button
