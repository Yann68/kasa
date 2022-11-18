// importation style, hook et logo
import { useState } from 'react'
import styles from './index.module.css'
import logoRight from '../../assets/right.png'
import logoLeft from '../../assets/left.png'

function Caroussel({ images }) {
  // régle l'etat du tableau d'image a 0
  const [changeImg, setChangeImg] = useState(0)
  // régle l'état du nombre a 1
  const [numberChange, setNumberChange] = useState(1)
  const length = images.pictures.length
  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <img
          className={styles.image}
          src={images.pictures[changeImg]}
          alt="logement"
        />
      </div>
      <img
        onClick={() => {
          // si c'est la 1ére image on retourne a la derniére sinon on recule de 1
          setChangeImg(changeImg === 0 ? length - 1 : changeImg - 1)
          // le nombre est egale a l'image presente sinon il est deduit de 1
          setNumberChange(numberChange === 1 ? length : numberChange - 1)
        }}
        className={styles.buttonLeft}
        style={{ scale: length === 1 && 0 }}
        src={logoLeft}
        alt="bouton pour aller a gauche"
      />
      <img
        onClick={() => {
          // si on a pas atteint le bout du tableau d'images on augmente de 1
          // sinon on retourne a la 1ére image
          setChangeImg(changeImg < length - 1 ? changeImg + 1 : 0)
          // si le nombre est inférieur a la quantité d'image on augmente de 1
          // sinon on retourne a 1
          setNumberChange(numberChange < length ? numberChange + 1 : 1)
        }}
        className={styles.buttonRight}
        style={{ scale: length === 1 && 0 }}
        src={logoRight}
        alt="bouton pour aller a droite"
      />
      <p style={{ scale: length === 1 && 0 }}>
        {numberChange} / {length}
      </p>
    </div>
  )
}

export default Caroussel

// {images.pictures.map((picture, index) => (
// <img
// key={index}
// className={styles.image}
// src={picture}
// alt="logement"
// />
// ))}
