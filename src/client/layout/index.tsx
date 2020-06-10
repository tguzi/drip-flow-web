import React, { ReactElement, SFC, ReactChild, Fragment } from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

// import '../static/css/reset.css'

type IProps = Partial<{
  header: ReactChild; // 自定义header
  footer: ReactElement; // 自定义footer
  showHeader: boolean; // 是否隐藏header
  showFooter: boolean; // 隐藏footer
}>

const Content = styled.div`
  min-height: calc(100vh - 90px);
  background: #fff;
`

const Layout: SFC<IProps> = ({
  showFooter,
  showHeader,
  footer,
  header,
  children
}) => (
  <Fragment>
    { showHeader && header }
    <Content>{children}</Content>
    { showFooter && footer }
  </Fragment>
)

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
  header: <Header />,
  footer: <Footer />,
}

export default Layout
