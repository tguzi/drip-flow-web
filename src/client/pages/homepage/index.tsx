import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../../layout'
import Content from './content'

import { AddBlogBtn } from './styled'

const Homepage = () => {
  // const history = useHistory()
  const [name, setName] = useState('小明')
  return (
    <Layout layout="content-center">
      <Content />
      <AddBlogBtn
        onClick={() => {
          // history.push({
          //   pathname: '/editor',
          //   state: {
          //     new: true,
          //     backpath: '/',
          //   },
          // })
        }}
      />
    </Layout>
  )
}

export default Homepage
