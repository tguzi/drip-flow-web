import React, { useState } from 'react'
import Rocket from '../../static/imgs/rocket.svg'
import { StyledBackToTop } from './styled'

import { useScroll } from '../../hooks/index'

interface Props {
  src?: string;
}

const BackToTop = ({ src }: Props) => {
  const { isScroll } = useScroll()
  const [animated, setAnimated] = useState(false)

  const onToTop = () => {
    setAnimated(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <StyledBackToTop
      className={isScroll ? 'show' : 'animated'}
      src={src}
      onClick={onToTop}
      animated={animated}
    />
  )
}

BackToTop.defaultProps = {
  src: Rocket,
}

export default BackToTop
