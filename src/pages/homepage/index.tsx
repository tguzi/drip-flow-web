import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from 'layout'
import Content from './content'
import { AddBlogBtn } from './styled'

console.log('github actions')

const Homepage = () => {
  const history = useHistory()
  console.log('我是小小到github actions测试')
  return (
    <Layout layout="content-center">
      <Content />
      <AddBlogBtn
        onClick={() => {
          history.push({
            pathname: '/editor',
            state: {
              new: true,
              backpath: '/'
            }
          })
        }}
      />
    </Layout>
  )
}

export default Homepage
