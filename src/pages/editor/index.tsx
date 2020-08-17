import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { throttle, encodeId, decodeId } from '@tgu/utils'
import { post, get } from 'utils/request'
import MarkdownEditor from 'components/MarkDown/editor'
import MarkdownView from 'components/MarkDown/view'
import Popover from 'components/Popover'
import Upload from 'components/Upload'
import useResponse from 'hooks/useResponse'
import {
  Wrap,
  Header,
  Input,
  Button,
  Content,
  EditorBox,
  ViewBox,
  UploadCover,
  UploadEmpty
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
      getDetail()
    }
  }, [])

  async function getDetail() {
    const [data] = await useResponse(get(`/article/get?id=${id}`))
    if (data) {
      setArticleInfo(data)
      setDefaultValue(data?.content)
      setTitle(data?.title)
      setCover(data?.cover)
    }
  }

  function setValue(text: any) {
    setVal(text)
  }

  async function handleUpdate() {
    const param = {
      id: articleInfo.id,
      labelId: 1,
      sortId: 1,
      title,
      cover,
      content: val
    }
    if (!cover) {
      delete param.cover
    }
    const [data] = await useResponse(post('/article/update', param))
    if (data) {
      history.push(`/article/${params?.id}`)
    }
  }

  async function handlePublish() {
    const param = {
      labelId: 1,
      sortId: 1,
      title,
      cover,
      content: val
    }
    const [data] = await useResponse(post('/article/add', param))
    if (data) {
      history.push(`/article/${encodeId(data.id)}`)
    }
  }

  function onCoverUpload(res: any) {
    setCover(res?.serverPath)
  }

  function Cover() {
    return (
      <Upload onchange={onCoverUpload}>
        {
          cover ? (
            <UploadCover src={cover} />
          ) : (
            <UploadEmpty
              justify="center"
              align="center"
            >+</UploadEmpty>
          )
        }
      </Upload>
    )
  }

  return (
    <Wrap>
      <Header>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="输入文章标题..." />
        <Popover content={<Cover />}>
          <Button>上传头图</Button>
        </Popover>
        &nbsp;&nbsp;
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
