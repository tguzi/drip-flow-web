import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import {
  ErrorWrapper,
  Container,
  RowContainer,
  ErrorLink,
  Tip,
  ReturnLink
} from './styled'

type TProps = Partial<{
  msg: string;
}>

const ErrorTemplate: SFC<TProps> = ({
  msg,
}) => (
  <ErrorWrapper>
    <RowContainer>
      <Link to="/">
        <ReturnLink>返回首页</ReturnLink>
      </Link>
    </RowContainer>
    <Container>
      <RowContainer>
        <ErrorLink>Error</ErrorLink>
        <Tip>{msg}</Tip>
      </RowContainer>
    </Container>
  </ErrorWrapper>
)

export default ErrorTemplate
