import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage'
import NotFound from './pages/not-found'
import List from './pages/list'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={Homepage} />
      <Route path="/list" render={List} />
      <Route path="/" render={Homepage} />
      <Route path="/*" render={NotFound} />
    </Switch>
  </BrowserRouter>
)