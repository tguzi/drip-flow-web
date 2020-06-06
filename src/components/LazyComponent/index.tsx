import React, { lazy, SFC } from 'react'

interface IProps {
  filepath: string;
}

// 懒加载组件
// Tips: Suspense还处于试用期，react还没给它转正
const LazyComponent: SFC<IProps> = ({
  filepath
}) => {
  const el = lazy(() => import(filepath))
  // return (
  //   <Suspense fallback={<div>loading</div>}>
  //     {el}
  //   </Suspense>
  // )
  return <div>{el}</div>
}

export default LazyComponent
