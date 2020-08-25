/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { decodeId, timeFormat } from '../../utils/index'
import { get } from '../../fetch'
import Layout from '../../layout'
import Icon from '../../components/Icon'
import MarkdownView from '../../components/MarkDown/view'
import { Content, Title, Cover, Info, Item, LoadingBox } from './styled'
import Loading from '../../components/Loading'

const Article = () => {
  // const params: any = useParams()
  // TODO: 检测useState初始值为
  const [articleInfo, setArticleInfo] = useState(null)

  useEffect(() => {
    // const id = decodeId(params.id)
    const fetchData = async () => {
      const result = await get(`/article/get?id=4`)
      console.log(result.data)
      setArticleInfo(result.data)
    }
    fetchData()
  }, [])

  // const history = useHistory()

  const gotoEditor = () => {
    // history.push(`/editor/${params?.id}`)
  }

  return (
    <>
      <Content>
        {articleInfo?.content ? (
          <>
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
                <span>{timeFormat(articleInfo?.updatedAt)}</span>
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
                <span className="btn" onClick={gotoEditor}>
                  编辑
                </span>
              </Item>
            </Info>
            <Cover src={articleInfo?.cover} />
            <MarkdownView content={articleInfo?.content} />
          </>
        ) : (
          <LoadingBox>
            <Loading type="heart" />
          </LoadingBox>
        )}
      </Content>
    </>
  )
}

export default Article
