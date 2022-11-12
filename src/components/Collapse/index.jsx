// Importation du style, des logos et des hooks
import styles from './index.module.css'
import { useState } from 'react'
import logoClose from '../../assets/close.png'
import logoOpen from '../../assets/open.png'
import { useRef } from 'react'

// Fonction du collapse
function ComponentCollapse(props) {
  // Variable pour indiqué l'etat par default
  const [isOpen, setIsOpen] = useState(false)
  const content = useRef(null)

  return (
    <article>
      <header className={styles.header}>
        <h1 className={styles.title}> {props.title} </h1>
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
        className={isOpen ? styles.collapseOpen : undefined}
      >
        <div className={styles.content} ref={content}>
          {props.content}
        </div>
      </div>
    </article>
  )
}
export default ComponentCollapse
