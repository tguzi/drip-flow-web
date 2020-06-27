import React, { SFC, Fragment } from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import 'static/css/reset.css'

type IProps = Partial<{
  cName: string;
  layout: string;
}> & IContent

type IContent = Partial<{
  bgColor: string;
}>

const Content = styled.div<IContent>`
  min-height: 100vh;
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
      className={`${cName} layout-${layout}`}
    >{children}</Content>
    <Footer />
  </Fragment>
)

Layout.defaultProps = {
  bgColor: 'rgba(240, 240, 240, 0.5)'
}

export default Layout
