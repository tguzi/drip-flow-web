import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from 'layout'
import Content from './content'
import BackToTop from 'components/BackToTop'
import { AddBlogBtn } from './styled'

const Homepage = () => {
  const history = useHistory()
  return (
    <Layout layout="content-center">
      <Content />
      <BackToTop />
      <AddBlogBtn
        onClick={() => {
          history.push({
            pathname: '/editor',
            state: {
              new: true,
              backpath: '/',
            },
          })
        }}
      />
    </Layout>
  )
}

export default Homepage
