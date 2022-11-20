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
        <NavLink
          className={styles.link}
          style={({ isActive }) => {
            return { textDecoration: isActive && 'underline' }
          }}
          to="/"
          end
        >
          Accueil
        </NavLink>

        <NavLink
          className={styles.link}
          style={({ isActive }) => {
            return { textDecoration: isActive && 'underline' }
          }}
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
