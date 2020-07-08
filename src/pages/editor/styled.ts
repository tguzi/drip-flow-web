import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 5px 5px 5px rgb(245, 245, 245);
`

export const Input = styled.input`
  flex: 1;
  width: 500px;
  height: 50px;
  padding: 20px;
  font-size: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  color: #333;
  &::placeholder {
    font-size: 20px;
    color: #999;
  }
 `

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #2878ff;
  color: #efefef;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  display: block;
 `

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  z-index: 1;
`

export const EditorBox = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dashed #efefef;
  .CodeMirror {
    width: 100%;
    height: 100%;
  }
`

export const ViewBox = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  box-sizing: border-box;
  border: 1px dashed #efefef;
`
