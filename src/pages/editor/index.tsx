import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { throttle } from 'utils/index'
import MarkdownEditor from 'components/MarkDown/editor'
import MarkdownView from 'components/MarkDown/view'
import {
  Wrap,
  Header,
  Input,
  Button,
  Content,
  EditorBox,
  ViewBox
} from './styled'

const EditorArticle = () => {
  const history = useHistory()
  const [val, setVal] = useState('')

  function setValue(text: any) {
    setVal(text)
  }

  function handlePublish() {
    localStorage.setItem('demo-article', val)
    history.push({
      pathname: '/article/1',
    })
  }

  return (
    <Wrap>
      <Header>
        <Input placeholder="输入文章标题..." />
        <Button onClick={handlePublish}>发布</Button>
      </Header>
      <Content>
        <EditorBox>
          <MarkdownEditor
            value={val}
            onChange={throttle(setValue)}
            handleChange={throttle(setValue)}
          />
        </EditorBox>
        <ViewBox>
          <MarkdownView content={val} />
        </ViewBox>
      </Content>
    </Wrap>
  )
}

export default EditorArticle
