// Importation du style, des logos et des hooks
import styles from './index.module.css'
import { useState } from 'react'
import close from '../../assets/close.png'
import open from '../../assets/open.png'

// Fonction du collapse
function ComponentCollapse({ propsInfo }) {
  // Variable pour indiqué l'etat par default
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <h1 className={styles.title}>{propsInfo.name}</h1>
        <img
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          src={!isOpen ? open : close}
          className={styles.button}
          alt="bouton pour fermé ou ouvrir l'info"
        />
      </div>
      <div className={styles.collapse}>
        <p>{propsInfo.info}</p>
      </div>
    </div>
  )
}
export default ComponentCollapse
