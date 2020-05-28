import React from 'react'
import ReactDom from 'react-dom'
import Route from './route'
// import 'static/css/reset.css'

const el = window.document.querySelector('#root')

const renderDom = () => {
  ReactDom.render(
    <Route />,
    el,
  )
}

renderDom()
