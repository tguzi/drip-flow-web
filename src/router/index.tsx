import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RouteMap from './route'

// 按文件名引入模块
const _import = (path: string) => () => require(`../pages${path}`).default()

export default () => (
  <BrowserRouter>
    <Switch>
      {
        RouteMap.map(({
          name,
          path,
          exact,
          component
        }) => {
          // 没有路由
          if (!path) {
            return
          }
          // 返回一个路由
          return (
            <Route
              key={name}
              path={path}
              exact={exact}
              render={_import(component || path)}
            />
          )
        })
      }
    </Switch>
  </BrowserRouter>
)
