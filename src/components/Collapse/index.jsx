// Importation du style, des logos et des hooks
import styles from './index.module.css'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

// Fonction du collapse
function ComponentCollapse({ title, content }) {
  // Variable pour indiqué l'etat par default
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article
      className={`${styles.collapse} ${isOpen ? styles.active : undefined}`}
    >
      <header>
        <h3> {title} </h3>
        <img
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          style={{ transform: isOpen && 'rotateX(180deg)' }}
          src={arrow}
          alt="bouton pour fermé ou ouvrir l'info"
        />
      </header>
      <div className={styles.content}>{content}</div>
    </article>
  )
}
export default ComponentCollapse

// isOpen ? styles.collapseOpen :
