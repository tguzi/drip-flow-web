import React, { lazy, SFC } from 'react'

interface IProps {
  path: string;
}

// 懒加载组件
// Tips: Suspense还处于试用期，react还没给它转正
const LazyComponent: SFC<IProps> = ({
  path,
}) => {
  // 延迟加载
  const Component = lazy(() => import(`../../pages${path}`))
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Component />
    </React.Suspense>
  )
}

export default LazyComponent
