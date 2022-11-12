import { useEffect, useState } from 'react'
import styles from './index.module.css'

function Loader() {
  const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false)
    }, 3000)
  }, [])
  return isLoader ? <div className={styles.loader}>bonjour</div> : null
}

export default Loader
