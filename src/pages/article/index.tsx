import React from 'react'
import { useParams } from 'react-router-dom'

import Layout from 'layout'
import MarkdownView from 'components/MarkDown/view'
import { ArticelContent } from './styled'

const Article = () => {
  const params = useParams()
  const val = localStorage.getItem('demo-article') || ''
  console.log(params)
  return (
    <Layout>
      <ArticelContent>
        <MarkdownView content={val} />
      </ArticelContent>
    </Layout>
  )
}

export default Article
