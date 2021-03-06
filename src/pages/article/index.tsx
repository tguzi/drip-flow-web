import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { decodeId } from '@tgu/utils'
import { get } from 'utils/request'
import Layout from 'layout'
import Icon from 'components/Icon'
import MarkdownView from 'components/MarkDown/view'
import useResponse from 'hooks/useResponse'
import {
  Content,
  Title,
  Cover,
  Info,
  Item
} from './styled'

const Article = () => {
  const params: any = useParams()
  const id = decodeId(params?.id)
  const [articleInfo, setArticleInfo] = useState<any>({})
  const history = useHistory()
  useEffect(() => {
    getDetail()
  }, [])

  async function getDetail() {
    const [data] = await useResponse(get(`/article/get?id=${id}`))
    if (data) {
      setArticleInfo(data)
    }
  }

  const gotoEditor = () => {
    history.push(`/editor/${params?.id}`)
  }

  return (
    <Layout>
      <Content>
        <Title>{articleInfo?.title}</Title>
        <Info>
          <Item>
            <Icon ico="user-o" />
            <span>{articleInfo?.User?.nickname}</span>
          </Item>
          <Item>
            <Icon ico="bookmark-o" />
            <span>{articleInfo?.Label?.name}</span>
          </Item>
          <Item>
            <Icon ico="calendar-o" />
            <span>{articleInfo?.updatedAt}</span>
          </Item>
          <Item>
            <Icon ico="eye" />
            <span>{articleInfo?.view_count}</span>
          </Item>
          <Item>
            <Icon ico="heart-o" />
            <span>{articleInfo?.like_count}</span>
          </Item>
          <Item>
            <span className="btn" onClick={gotoEditor}>编辑</span>
          </Item>
        </Info>
        {
          articleInfo?.cover && <Cover src={articleInfo.cover} />
        }
        <MarkdownView content={articleInfo?.content} />
      </Content>
    </Layout>
  )
}

export default Article
