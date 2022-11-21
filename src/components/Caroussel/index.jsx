import { useState } from 'react'
import styles from './index.module.css'
import arrow from '../../assets/arrow.svg'

function Caroussel({ images }) {
  const [changeImg, setChangeImg] = useState(0)
  const [numberChange, setNumberChange] = useState(1)
  const length = images.pictures.length

  // si c'est la 1ére image on retourne a la derniére sinon on recule de 1
  // le nombre est egale a l'image presente sinon il est deduit de 1
  function clickLeft() {
    setChangeImg(changeImg === 0 ? length - 1 : changeImg - 1)
    setNumberChange(numberChange === 1 ? length : numberChange - 1)
  }
  // si on a pas atteint le bout du tableau d'images on augmente de 1
  // sinon on retourne a la 1ére image
  // si le nombre est inférieur a la quantité d'image on augmente de 1
  // sinon on retourne a 1
  function clickRight() {
    setChangeImg(changeImg < length - 1 ? changeImg + 1 : 0)
    setNumberChange(numberChange < length ? numberChange + 1 : 1)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <img src={images.pictures[changeImg]} alt="logement" />
      </div>
      <img
        onClick={() => {
          clickLeft()
        }}
        className={styles.buttonLeft}
        style={{ scale: length === 1 && 0 }}
        src={arrow}
        alt="bouton pour aller a gauche"
      />
      <img
        onClick={() => {
          clickRight()
        }}
        className={styles.buttonRight}
        style={{ scale: length === 1 && 0 }}
        src={arrow}
        alt="bouton pour aller a droite"
      />
      <p style={{ scale: length === 1 && 0 }}>
        {numberChange}/{length}
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
