import styled, { keyframes } from 'styled-components'

// 弹出
export const popup = keyframes`
  form {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
  } to {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const DialogBox = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  animation: ${popup} 0.25s ease-in forwards;
  &.hide {
    z-index: -1;
  }
`