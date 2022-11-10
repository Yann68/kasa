import { NavLink, Link } from 'react-router-dom'
import LOGO from '../../assets/LOGO_R.png'
import styles from './index.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={LOGO} alt="logo Kasa" className={styles.logo} />
      </Link>

      <nav className={styles.container}>
        <NavLink className={styles.link} to="/">
          Accueil
        </NavLink>

        <NavLink to="/about" className={styles.link}>
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
