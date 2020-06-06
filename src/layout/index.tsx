import React, { ReactElement, SFC, ReactChild, Fragment } from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import 'static/css/reset.css'

type IProps = Partial<{
  header: ReactChild; // 自定义header
  footer: ReactElement; // 自定义footer
  showHeader: boolean; // 是否隐藏header
  showFooter: boolean; // 隐藏footer
}> & IContent

type IContent = Partial<{
  bgColor: string;
}>

const Content = styled.div<IContent>`
  height: calc(100vh - 90px);
  background: ${({ bgColor }) => bgColor};
  overflow: auto;
`

const Layout: SFC<IProps> = ({
  showFooter,
  showHeader,
  footer,
  header,
  bgColor,
  children
}) => (
  <Fragment>
    { showHeader && header }
    <Content bgColor={bgColor}>{children}</Content>
    { showFooter && footer }
  </Fragment>
)

Content.defaultProps = {
  bgColor: '#efefef'
}

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
  header: <Header />,
  footer: <Footer />,
}

export default Layout
