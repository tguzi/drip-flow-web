import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { throttle, encodeId } from 'utils/index'
import { post } from 'src/fetch'
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
  const [title, setTitle] = useState('')

  function setValue(text: any) {
    setVal(text)
  }

  async function handlePublish() {
    try {
      const param = {
        labelId: 1,
        sortId: 1,
        title,
        cover: 'https://www.bing.com/th?id=OHR.ColoradoColumbine_ZH-CN0901580141_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=HpEdgeAn',
        content: val
      }
      const res = await post('/api/article/add', { body: JSON.stringify(param) })
      const info = res?.data
      history.push(`/article/${encodeId(info.article_id)}`)
    } catch (e) {
      console.log('保存失败')
    }
  }

  return (
    <Wrap>
      <Header>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="输入文章标题..." />
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
