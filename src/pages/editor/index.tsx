import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { throttle, encodeId, decodeId } from 'utils/index'
import { post, get, put } from 'src/fetch'
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
  const [defaultValue, setDefaultValue] = useState('')

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
          setDefaultValue(info?.data?.content)
          setTitle(info?.data?.title)
          setCover(info?.data?.cover)
        } catch (e) {
          console.log('请求详情出错: ', e)
        }
      })()
    }
  }, [])

  function setValue(text: any) {
    setVal(text)
  }

  async function handleUpdate() {
    try {
      const param = {
        id: articleInfo.id,
        labelId: 1,
        sortId: 1,
        title,
        cover,
        content: val
      }
      if (!cover) {
        delete param['cover']
      }
      await post('/article/update', { body: JSON.stringify(param) })
      history.push(`/article/${params?.id}`)
    } catch (e) {
      console.log('更新失败')
    }
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
        <Button onClick={isUpdate ? handleUpdate : handlePublish}>{isUpdate ? '更新' : '发布'}</Button>
      </Header>
      <Content>
        <EditorBox>
          <MarkdownEditor
            defaultValue={defaultValue}
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
