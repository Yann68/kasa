import styles from './index.module.css'
import LOGO from '../../assets/LOGO_W.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img src={LOGO} alt="logo kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
