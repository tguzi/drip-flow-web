import React from 'react'
import { BrowserRouter, Switch, Router} from 'react-router-dom'

import history from 'utils/history'
import routes from './routes'
import RenderRoute from './render'

export default () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        {routes.map(v => <RenderRoute key={v.path} {...v} />)}
      </Switch>
    </Router>
  </BrowserRouter>
)
