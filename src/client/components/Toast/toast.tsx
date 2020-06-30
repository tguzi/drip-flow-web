import React, { SFC } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 999;
`

const Container = styled.div`
  width: auto;
  height: auto;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 5px;
`

const Toast: SFC = ({
  children
}) => (
  <Wrap>
    <Container>{children}</Container>
  </Wrap>
)

Toast.defaultProps = {}

export default Toast
