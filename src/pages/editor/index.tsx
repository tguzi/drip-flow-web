import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { throttle, encodeId, decodeId } from 'utils/index'
import { post, get } from 'src/fetch'
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
  const [cover, setCover] = useState('')

  const params: any = useParams()
  const id = decodeId(params?.id)
  const isUpdate = Boolean(id)
  const [articleInfo, setArticleInfo] = useState<any>({})
  useEffect(() => {
    if (!isUpdate) {
      return
    } else {
      (async () => {
        try {
          const info = await get(`/article/get?id=${id}`)
          setArticleInfo(info?.data)
          setVal(info?.data?.content)
        } catch (e) {
          console.log('请求详情出错: ', e)
        }
      })()
    }
  }, [])

  function setValue(text: any) {
    setVal(text)
  }

  async function handlePublish() {
    try {
      const param = {
        labelId: 1,
        sortId: 1,
        title,
        cover,
        content: val
      }
      const res = await post('/article/add', { body: JSON.stringify(param) })
      const info = res?.data
      history.push(`/article/${encodeId(info.id)}`)
    } catch (e) {
      console.log('保存失败')
    }
  }

  return (
    <Wrap>
      <Header>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="输入文章标题..." />
        <Input value={cover} onChange={(e) => setCover(e.target.value)} placeholder="输入文章封面" />
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
