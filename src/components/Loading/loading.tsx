import React from 'react'
import StripLoading from './StripLoading'
import HeartLoading from './HeartLoading'

type LoadingType = 'strip' | 'heart'

interface Props {
  type: LoadingType;
}

const Loading = ({type}: Props) => {
  if(type === 'strip') {
    return <StripLoading />
  }
  if(type === 'heart') {
    return <HeartLoading />
  }

  return <div>loading</div>
}

Loading.defaultProps = {
  type: 'strip'
}

export default Loading
