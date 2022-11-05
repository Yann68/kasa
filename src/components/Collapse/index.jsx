import styles from './index.module.css'
import { useState } from 'react'
import { Collapse } from 'react-collapse'
import close from '../../assets/close.png'
// import open from '../../assets/open.png'

function ComponentCollapse() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <p className={styles.title}>Fiabilité</p>
        <img
          onClick={() => {
            setIsOpen((isOpen) => !isOpen)
          }}
          src={close}
          alt="bouton pour fermé l'info "
        />
        {/* <img src={open} alt="bouton pour fermé l'info " /> */}
      </div>
      <Collapse isOpened={isOpen}>
        <p className={styles.collapse}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. </p>
      </Collapse>
    </div>
  )
}
export default ComponentCollapse
