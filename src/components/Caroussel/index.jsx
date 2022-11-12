// importation style, hook et logo
import { useState } from 'react'
import styles from './index.module.css'
import logoRight from '../../assets/right.png'
import logoLeft from '../../assets/left.png'

// fonction du caroussel d'images
function Caroussel({ props }) {
  const [changeImg, setChangeImg] = useState(0)
  const [numberChange, setNumberChange] = useState(1)
  return (
    <div className={styles.caroussel}>
      <h1 className={styles.load}>bonjour</h1>
      <div
        className={styles.carousselImg}
        style={{ backgroundImage: `url(${props.pictures[changeImg]})` }}
      >
        <img
          onClick={() => {
            changeImg > 0 && setChangeImg(changeImg - 1)
            numberChange > 1 && setNumberChange(numberChange - 1)
          }}
          className={styles.button}
          style={{
            scale: numberChange === 1 && 0,
          }}
          src={logoLeft}
          alt="bouton pour aller a gauche"
        />
        <img
          onClick={() => {
            changeImg < props.pictures.length - 1
              ? setChangeImg(changeImg + 1)
              : setChangeImg(0)
            numberChange < props.pictures.length
              ? setNumberChange(numberChange + 1)
              : setNumberChange(1)
          }}
          className={styles.button}
          style={{
            scale: props.pictures.length === 1 && 0,
          }}
          src={logoRight}
          alt="bouton pour aller a droite"
        />
        <p>
          {numberChange} / {props.pictures.length}
        </p>
      </div>
    </div>
  )
}

export default Caroussel
