import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

  useEffect(() => {
    (async () => {
      try {
        const info = await get(`/api/article/get?id=${id}`)
        setArticleInfo(info?.data)
      } catch (e) {
        console.log('请求详情出错: ', e)
      }
    })()
  }, [])

  return (
    <Layout>
      <Content>
        <Title>{articleInfo?.article_title}</Title>
        <Info>
          <Item>
            <Icon ico="user-o" />
            <span>{articleInfo?.user_id}</span>
          </Item>
          <Item>
            <Icon ico="bookmark-o" />
            <span>{articleInfo?.label_id}</span>
          </Item>
          <Item>
            <Icon ico="calendar-o" />
            <span>{articleInfo?.updatedAt}</span>
          </Item>
          <Item>
            <Icon ico="eye" />
            <span>{articleInfo?.article_view_count}</span>
          </Item>
          <Item>
            <Icon ico="heart-o" />
            <span>{articleInfo?.article_like_count}</span>
          </Item>
        </Info>
        <Cover src={articleInfo?.article_cover} />
        <MarkdownView content={articleInfo?.article_content} />
      </Content>
    </Layout>
  )
}

export default Article
