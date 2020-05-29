import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Content from './pages/content'
// import NotFound from './pages/not-found'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={Content} />
      <Route path="/*" render={Content} />
    </Switch>
  </BrowserRouter>
)
