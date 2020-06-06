import React from 'react'
import styled from 'styled-components'

import Layout from 'layout'
import BlogList from './BlogList'

const Content = styled.div`
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
`

const Homepage = () => (
  <Layout bgColor="#efefef">
    <Content>
      <BlogList />
    </Content>
  </Layout>
)

export default Homepage
