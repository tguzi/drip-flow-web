import React from 'react'
import styled from 'styled-components'

import Layout from 'layout'
import Content from './content'

const AddBlogBtn = styled.button`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 50px;
  height: 50px;
  transition: all 0.25s linear;
  border-radius: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  border: none;
  background: #37C2FF;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  outline: none;
  &::after {
    content: '+';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: #67D1FF;
  }
  &:active {
    background: #37C2FF1A;
  }
`

const Homepage = () => (
  <Layout layout="content-center">
    <Content />
    <AddBlogBtn />
  </Layout>
)

export default Homepage
