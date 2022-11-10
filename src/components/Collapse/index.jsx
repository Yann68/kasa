// Importation du style, des logos et des hooks
import styles from './index.module.css'
import { useState } from 'react'
import logoClose from '../../assets/close.png'
import logoOpen from '../../assets/open.png'

// Fonction du collapse
function ComponentCollapse({ info }) {
  // Variable pour indiqué l'etat par default
  const [isOpen, setIsOpen] = useState(false)
  // const location = useLocation()

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 name={test} className={styles.title}>{info.name}</h1>
        <img
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          src={!isOpen ? logoClose : logoOpen}
          className={styles.button}
          alt="bouton pour fermé ou ouvrir l'info"
        />
      </header>
      <div
        style={!isOpen ? { overflow: 'hidden', height: 0 } : null}
        className={isOpen && styles.collapseOpen}
      >
        <p>{info.info}</p>
      </div>
    </article>
  )
}
export default ComponentCollapse
