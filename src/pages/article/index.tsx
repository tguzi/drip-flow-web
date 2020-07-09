import React from 'react'
import { useParams } from 'react-router-dom'

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
  const val = localStorage.getItem('demo-article') || ''
  const id = params?.id
  console.log(id)
  return (
    <Layout>
      <Content>
        <Title>标题标题标题标题标题标题标题标题</Title>
        <Info>
          <Item>
            <Icon ico="user-o" />
            <span>用户</span>
          </Item>
          <Item>
            <Icon ico="bookmark-o" />
            <span>分类</span>
          </Item>
          <Item>
            <Icon ico="calendar-o" />
            <span>时间</span>
          </Item>
          <Item>
            <Icon ico="eye" />
            <span>199</span>
          </Item>
          <Item>
            <Icon ico="heart-o" />
            <span>0</span>
          </Item>
        </Info>
        <Cover src="http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/seashore-2882660-scaled.jpg" />
        <MarkdownView content={val} />
      </Content>
    </Layout>
  )
}

export default Article
