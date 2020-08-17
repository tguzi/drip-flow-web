import styled from 'styled-components'

export const PopoverBox = styled.span`
  position: relative;
  cursor: pointer;
  &:hover {
    .content {
      display: block;
    }
  }
`

export const PopoverContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  display: none;
  padding: 10px;
  border-radius: 5px;
  cursor: default;
`
