import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import MarkdownEditor from 'components/MarkDownEditor'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 5px 5px 5px rgb(245, 245, 245);
`

const Input = styled.input`
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

const Button = styled.button`
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

const EditorContent = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
`

const EditorArticle = () => {
  const location = useLocation()
  console.log('location: ', location)
  return (
    <Wrap>
      <Header>
        <Input placeholder="输入文章标题..." />
        <Button>发布</Button>
      </Header>
      <EditorContent>
        <MarkdownEditor />
      </EditorContent>
    </Wrap>
  )
}

export default EditorArticle
