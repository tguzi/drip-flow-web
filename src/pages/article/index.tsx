import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { decodeId } from 'utils/index'
import { get } from 'src/fetch'
import Layout from 'layout'
import Icon from 'components/Icon'
import MarkdownView from 'components/MarkDown/view'
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
    (async () => {
      try {
        const info = await get(`/article/get?id=${id}`)
        setArticleInfo(info?.data)
      } catch (e) {
        console.log('请求详情出错: ', e)
      }
    })()
  }, [])

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
