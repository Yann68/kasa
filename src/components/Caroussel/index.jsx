// importation style, hook et logo
import { useState } from 'react'
import styles from './index.module.css'
import logoRight from '../../assets/right.png'
import logoLeft from '../../assets/left.png'

// fonction du caroussel d'images
function Caroussel({ props }) {
  const [changeImg, setChangeImg] = useState(0)
  return (
    <div className={styles.caroussel}>
      <div
        className={styles.carousselImg}
        style={{ backgroundImage: `url(${props.pictures[changeImg]})` }}
      >
        <img
          onClick={() => {
            changeImg > 0 && setChangeImg(changeImg - 1)
          }}
          className={styles.button}
          src={logoLeft}
          alt="bouton pour aller a gauche"
        />
        <img
          onClick={() => {
            changeImg < props.pictures.length - 1
              ? setChangeImg(changeImg + 1)
              : setChangeImg(0)
          }}
          className={styles.button}
          src={logoRight}
          alt="bouton pour aller a droite"
        />
      </div>
    </div>
  )
}

export default Caroussel
