import React from 'react'
import ReactDom from 'react-dom'
import Route from './router'
import 'utils/additional'

const el = window.document.querySelector('#root')

const renderDom = () => {
  ReactDom.render(
    <Route />,
    el,
  )
}

renderDom()
