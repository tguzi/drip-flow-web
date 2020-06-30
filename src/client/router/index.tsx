import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// 按文件名引入模块
const _import = (path: any) => () => require(`../pages${path}`).default();

export default ({ routeList }: any) => {
  return (
      <Switch>
        {routeList.map(({ name, path, exact, component }: any) => {
          // 没有路由
          if (!path) {
            return;
          }
          // 返回一个路由
          return (
            <Route
              key={name}
              path={path}
              exact={exact}
              render={_import(component || path)}
            />
          );
        })}
      </Switch>
  );
};
