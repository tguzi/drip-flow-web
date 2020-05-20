import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import Header from 'pages/header'
import Content from 'pages/content'
import Footer from 'pages/footer'

const Layout = styled(Flex)`
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  overflow: hidden;
`

const Homepage = () => (
  <Layout direction="column">
    <Header />
    <Content />
    <Footer />
  </Layout>
)

export default Homepage
