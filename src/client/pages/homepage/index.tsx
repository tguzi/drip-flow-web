import React from 'react'
import styled from 'styled-components'

import Layout from '../../layout'
import Content from './content'

const AddBlogBtn = styled.button`
  position: fixed;
  cursor: pointer;
  bottom: 100px;
  right: 100px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  border: none;
  background: #abcdef;
  color: #fff;
  font-size: 32px;
  outline: none;
`

const Homepage = () => (
  <Layout layout="content-center">
    <Content />
    <AddBlogBtn />
  </Layout>
)

export default Homepage
