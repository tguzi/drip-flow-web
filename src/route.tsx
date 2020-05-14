import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage'
import NotFound from './pages/not-found'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={Homepage} />
      <Route path="/*" render={NotFound} />
    </Switch>
  </BrowserRouter>
)