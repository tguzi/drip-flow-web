import styled from 'styled-components'

export const StyledBackToTop = styled.img`
  position: fixed;
  bottom: 160px;
  right: 100px;
  width: 50px;
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,.5));
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  transition: all 0.3s;
  &.show {
    opacity: 1;
    pointer-events: auto;
  }
`
