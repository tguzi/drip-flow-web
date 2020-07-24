import styled from 'styled-components'

export const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  width: 100%;
  height: 2px;
`

export const Inner = styled.div<any>`
  width: ${({percent}: any) => `${percent}%`};
  height: 20px;
  transition: width .2s linear;
  background-color: #39f;
`
