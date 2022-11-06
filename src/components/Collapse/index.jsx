import styles from './index.module.css'
import { useState } from 'react'
import { Collapse } from 'react-collapse'
import close from '../../assets/close.png'
import open from '../../assets/open.png'

function ComponentCollapse({info}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <p className={styles.title}>{info.name}</p>
        <img
          className={styles.button}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          src={!isOpen ? close : open}
          alt="bouton pour fermé ou ouvrir l'info"
        />
      </div>
      <Collapse className={styles.test} isOpened={isOpen}>
        <p className={styles.collapse}>
          {info.description}
        </p>
      </Collapse>
    </div>
  )
}
export default ComponentCollapse
