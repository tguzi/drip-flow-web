import styled from 'styled-components'

export const Container = styled.div`
  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`

export const UnderContainer = styled.div`
  padding: 4px 0;
  border: none;
  border-radius: 2px;
  &:hover {
    hr.active-hr {
      transform: scaleX(1);
    }
  }
`

export const InputSelf = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: #fff;
  background-image: none;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  &::-webkit-input-placeholder {
    font-size: 14px;
    color: #c5c5c5;
  }
`
export const HrContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4px;
  hr {
    margin: 0;
    &.default-hr {
      background-color: rgba(0, 0, 0, 0.4);
    }
    &.active-hr {
      height: 1px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background-color: #2878ff;
      transform: scaleX(0);
      transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
        -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`
