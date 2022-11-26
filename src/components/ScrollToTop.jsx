import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// fonction pour scroller automatiquement en haut de la page
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
export default ScrollToTop
