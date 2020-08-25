import React from 'react'
import { StaticRouter, Route } from 'react-router'
import getAssets from '../common/assets'
import { renderToString } from 'react-dom/server'
import routeMap from '../../client/router/route'
import App from '../../client/router/index'

const assetsMap = getAssets()

export default (ctx: any, next: () => void) => {
  const path = ctx.request.path

  const component = (
    <StaticRouter location={path}>
      <App routeList={routeMap}></App>
    </StaticRouter>
  )
  const html =
    typeof component === 'string' ? component : renderToString(component)

  console.log('html: \n', html)

  ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>滴流谷</title>
      ${assetsMap.css.join('')}
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
    ${assetsMap.js.join('')}
  `

  return next()
}
