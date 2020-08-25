import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RenderRoute from './render'
import HomePage from '../pages/homepage'

// 按文件名引入模块
const _import = (path: any) => () => require(`../pages${path}`).default()

const RoutePage = ({ routeList }: any) => {
  const getComponent = ({ component, path }) => {
    const filepath = component || path.split(':')[0]
    return _import(filepath)
  }
  return (
    <>
      <Switch>
        {routeList.map((v, i) => {
          return (
            <RenderRoute key={v.path} renderComponent={getComponent(v)} {...v} />
          )
        })}
      </Switch>
    </>
  )
}

export default RoutePage
