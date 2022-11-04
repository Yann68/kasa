import styles from './index.module.css'
import LOGO from '../../assets/LOGO_W.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/accueil">
      <img src={LOGO} alt="logo kasa" className={styles.logo} />
      </Link>
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer


