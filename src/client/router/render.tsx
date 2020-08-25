import React, { SFC } from 'react'
import { Route } from 'react-router-dom'
import LazyComponent from '../components/LazyComponent'
import ErrorBoundary from '../components/ErrorBoundary'
// import ProfilerComponent from 'components/ProfilerComponent'
// import config from 'config/index'

// 按文件名引入模块
interface IProps {
  path: string
}

type TProps = Partial<{
  name: string
  exact: boolean
  title: string
  authority: string[]
  component: string
  renderComponent: any
}> &
  IProps

const _import = (path: any) => () => require(`../pages${path}`).default()

const RenderRouter: SFC<TProps> = (props) => {
  const { path, renderComponent } = props

  return <Route path={path} exact component={renderComponent} />
}

RenderRouter.defaultProps = {
  path: '/',
  name: '',
}

export default RenderRouter
