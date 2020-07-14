import React from 'react'
import { StripLoadingWrap, StripLoadingItem } from './styled'

const StripLoading = () => (
  <StripLoadingWrap>
    {new Array(6).fill(0).map((item, key) => {
      return <StripLoadingItem index={key} key={key}/>
    })}
  </StripLoadingWrap>
)

export default StripLoading
