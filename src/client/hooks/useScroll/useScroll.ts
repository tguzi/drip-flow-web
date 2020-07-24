import {useState, useEffect} from 'react'

export const useScroll = (distance = 300) => {
  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= distance) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [distance])

  return { isScroll }
}
