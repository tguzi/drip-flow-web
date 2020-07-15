import React, { useState } from 'react'
import { Outer, Inner } from './styled'
import { useInterval } from 'src/hooks'

const LoadingBar = () => {
  const [percent, setPercent] = useState(0)

  useInterval(() => {
    if (percent < 95) {
      setPercent(percent + Math.floor(Math.random() * 3 + 1))
    }
  }, 200)

  return (
    <Outer>
      <Inner percent={percent} />
    </Outer>
  )
}
export default LoadingBar
