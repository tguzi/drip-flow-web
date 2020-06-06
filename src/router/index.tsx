import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import routes from './routes'
import RenderRoute from './render'

export default () => (
  <BrowserRouter>
    { routes.map(v => <RenderRoute key={v.path} {...v} />) }
  </BrowserRouter>
)
