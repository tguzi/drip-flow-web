import React, { SFC } from 'react'
import { Route } from 'react-router-dom'
import LazyComponent from 'components/LazyComponent'
import ErrorBoundary from 'components/ErrorBoundary'
import ProfilerComponent from 'components/ProfilerComponent'
import config from 'config/index'

// 按文件名引入模块
interface IProps {
  path: string;
}

type TProps = Partial<{
  name: string;
  exact: boolean;
  title: string;
  authority: string[];
  component: string;
  notRender: boolean;
}> & IProps

// 跳转前的操作
const BeforRender = (path: string, name: string) => {
  // 页面懒加载，加载出错则提示
  // if (config.isDev) {
  //   return (
  //     <ErrorBoundary>
  //       <ProfilerComponent id={name}>
  //         <LazyComponent path={path} />
  //       </ProfilerComponent>
  //     </ErrorBoundary>
  //   )
  // } else {
  //   return (
  //     <ErrorBoundary>
  //       <LazyComponent path={path} />
  //     </ErrorBoundary>
  //   )
  // }
  return (
    <ErrorBoundary>
      <LazyComponent path={path} />
    </ErrorBoundary>
  )
}

const RenderRouter: SFC<TProps> = props => {
  const { path, exact, component, notRender, name } = props
  const filepath = component || path.split(':')[0]
  const filename = name || path.split(':')[0]
  // 之后可以在这边加入权限校验 - 路由校验等功能
  return notRender
    ? <Route path={path} exact={exact} component={() => BeforRender(filepath, filename)} />
    : <Route path={path} exact={exact} render={() => BeforRender(filepath, filename)} />
}

RenderRouter.defaultProps = {
  path: '/',
  name: '',
}

export default RenderRouter
