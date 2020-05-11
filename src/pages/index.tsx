import React from 'react'
import styled from 'styled-components'
import './index.css'
import Flex from '../components/Flex'

const Pg = styled.div`
  background: red;
`

const Homepage = () => (
  <React.Fragment>
    <Flex />
    <Pg>this is page</Pg>
  </React.Fragment>
)

export default Homepage