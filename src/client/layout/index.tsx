import React, { SFC, Fragment } from 'react'
import styled from 'styled-components'

import BackToTop from '../components/BackToTop'

import Header from './header'
import Footer from './footer'

import '../static/css/reset.css'

type IProps = Partial<{
  cName: string;
  layout: string;
}> & IContent

type IContent = Partial<{
  bgColor: string;
}>

const Content = styled.div<IContent>`
  min-height: calc(100vh - 175px);
  background: ${({ bgColor }) => bgColor};
  overflow: auto;
  &.layout-content-center {
    width: 1100px;
    margin: 0 auto;
  }
`

const Layout: SFC<IProps> = ({
  bgColor,
  cName,
  layout,
  children
}) => (
  <Fragment>
    <Header />
    <Content
      bgColor={bgColor}
      className={`${cName || ''} layout-${layout}`}
    >{children}</Content>
    <Footer />
    <BackToTop />
  </Fragment>
)

Layout.defaultProps = {
  bgColor: 'transparent',
  layout: 'default'
}

export default Layout
