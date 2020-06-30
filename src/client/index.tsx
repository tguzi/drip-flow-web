import React from 'react';
import ReactDom from 'react-dom';
import App from './router';
import RouteMap from './router/route';
import { BrowserRouter } from 'react-router-dom';

const el = window.document.querySelector('#root');

ReactDom.hydrate(
  <BrowserRouter>
    <App routeList={RouteMap} />
  </BrowserRouter>,
  el
);

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept();
}
