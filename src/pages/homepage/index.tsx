import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from 'layout'
import { useSessionStorageState } from 'hooks/useStorage/useSessionStorageState'
import Content from './content'
import { AddBlogBtn } from './styled'

const Homepage = () => {
  const history = useHistory()
  const [userInfo] = useSessionStorageState<any>('userInfo', {})
  return (
    <Layout layout="content-center">
      <Content />
      {
        userInfo.id ? (
          <AddBlogBtn
            onClick={() => {
              history.push('/editor')
            }}
          />
        ) : null
      }
    </Layout>
  )
}

export default Homepage
