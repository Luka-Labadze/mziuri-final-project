import { useState, useEffect } from 'react'
import useScrollTop from '../hooks/useScrollTop'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  
  useScrollTop() 

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`scrollToTop ${visible ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <p className='STTBtn'>⬆</p>
    </div>
  )
}

export default ScrollToTop