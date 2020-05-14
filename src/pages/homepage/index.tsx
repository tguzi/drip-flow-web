import React from 'react'
import styled from 'styled-components'

import Header from '../header'
import Content from '../content'

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 80px;
`

const Homepage = () => (
  <Layout>
    <Header />
    <Content />
  </Layout>
)

export default Homepage