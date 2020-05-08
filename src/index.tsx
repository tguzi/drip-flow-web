  
import React from 'react'
import ReactDom from 'react-dom'
import Homepage from './pages'

const el = window.document.querySelector('#root')

const renderDom = () => {
  ReactDom.render(
    <Homepage />,
    el,
  )
}

renderDom()