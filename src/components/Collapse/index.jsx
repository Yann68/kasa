// Importation du style, des logos et des hooks
import styles from './index.module.css'
import { useState } from 'react'
import logoClose from '../../assets/close.png'
import logoOpen from '../../assets/open.png'

// Fonction du collapse
function ComponentCollapse({ title, content }) {
  // Variable pour indiqué l'etat par default
  const [isOpen, setIsOpen] = useState(false)

  function HandleToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <article className={isOpen && styles.active}>
      <header className={styles.header}>
        <h1 className={styles.title}> {title} </h1>
        <img
          onClick={() => {
            HandleToggle()
          }}
          src={!isOpen ? logoClose : logoOpen}
          className={styles.button}
          alt="bouton pour fermé ou ouvrir l'info"
        />
      </header>
      <div className={styles.content}>{content}</div>
    </article>
  )
}
export default ComponentCollapse

// isOpen ? styles.collapseOpen :
