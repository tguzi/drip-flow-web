import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import routes from './routes'
import RenderRoute from './render'

export default () => (
  <BrowserRouter>
    <Switch>
      { routes.map(v => <RenderRoute key={v.path} {...v} />) }
    </Switch>
  </BrowserRouter>
)
