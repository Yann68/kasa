import styles from './index.module.css'
import { useState } from 'react'
import { Collapse } from 'react-collapse'
import close from '../../assets/close.png'
import open from '../../assets/open.png'

function ComponentCollapse({props}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <p className={styles.title}>{props.name}</p>
        <img
          className={styles.button}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          src={!isOpen ? open : close}
          alt="bouton pour fermé ou ouvrir l'info"
        />
      </div>
      <Collapse isOpened={isOpen}>
        <p className={styles.collapse}>
          {props.info}
        </p>
      </Collapse>
    </div>
  )
}
export default ComponentCollapse