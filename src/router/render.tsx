import React, { SFC } from 'react'
import { Route } from 'react-router-dom'
import LazyComponent from 'components/LazyComponent'
import ErrorBoundary from 'components/ErrorBoundary'

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
const BeforRender = (filepath: string) => {
  // 页面懒加载，加载出错则提示
  return (
    <ErrorBoundary>
      <LazyComponent filename={filepath} />
    </ErrorBoundary>
  )
}

const RenderRouter: SFC<TProps> = props => {
  const { path, exact, component, notRender } = props
  const filename = component || path
  return notRender
    ? <Route path={path} exact={exact} component={() => BeforRender(filename)} />
    : <Route path={path} exact={exact} render={() => BeforRender(filename)} />
}

RenderRouter.defaultProps = {
  path: '/',
  name: '',
}

export default RenderRouter
