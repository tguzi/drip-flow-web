import styled from 'styled-components'

export const Wrap = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
`

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 1;
  background: red;
  cursor: pointer;
`

export const ChildWrap = styled.div`
  z-index: -1;
  pointer-events: none;
`
