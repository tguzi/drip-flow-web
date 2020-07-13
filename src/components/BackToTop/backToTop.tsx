import React, { useState, useEffect } from 'react'
import Rocket from 'imgs/rocket.svg'
import { StyledBackToTop } from './styled'

interface Props {
  src?: string;
}

const useScroll = (distance = 300) => {
  const [canScroll, setCanScroll] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= distance) {
        setCanScroll(true)
      } else {
        setCanScroll(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [distance])

  return { canScroll }
}

const BackToTop = ({ src }: Props) => {
  const { canScroll } = useScroll()
  const className = canScroll ? 'show' : ''
  return <StyledBackToTop className={className} src={src} />
}

BackToTop.defaultProps = {
  src: Rocket,
}

export default BackToTop
