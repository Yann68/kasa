import { NavLink, Link } from 'react-router-dom'
import LOGO from '../../assets/LOGO_R.png'
import styles from './index.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/accueil">
        <img src={LOGO} alt="logo Kasa" className={styles.logo} />
      </Link>
      <div className={styles.containerLink}>
        <NavLink
          style={({ isActive }) => {
            return { textDecoration: isActive ? 'underline' : 'none' }
          }}
          className={styles.link}
          to="/accueil"
        >
          Accueil
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { textDecoration: isActive ? 'underline' : 'none' }
          }}
          className={styles.link}
          to="/about"
        >
          A propos
        </NavLink>
      </div>
    </header>
  )
}

export default Header
