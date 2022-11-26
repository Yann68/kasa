import { useState } from 'react'
import styles from './index.module.css'
import arrow from '../../assets/arrow.svg'

function Caroussel({ images }) {
  const [changeImg, setChangeImg] = useState(0)
  const image = images.pictures.length

  // si c'est la 1ére image on retourne a la derniére sinon on recule de 1
  function clickLeft() {
    setChangeImg(changeImg === 0 ? image - 1 : changeImg - 1)
  }

  // si on a pas atteint le bout du tableau d'images on augmente de 1
  // sinon on retourne a la 1ére image
  function clickRight() {
    setChangeImg(changeImg < image - 1 ? changeImg + 1 : 0)
  }

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderContent}
        style={{
          // marge a gauche de la longueur de l'image pour affiché la suivante
          marginLeft: changeImg && -100 * changeImg + '%',
        }}
      >
        {images.pictures.map((picture, id) => (
          <img key={id} className={styles.image} src={picture} alt="logement" />
        ))}
      </div>
      <img
        onClick={clickLeft}
        className={styles.arrowLeft}
        style={{ scale: image === 1 && 0 }}
        src={arrow}
        alt="bouton pour aller a gauche"
      />
      <img
        onClick={clickRight}
        className={styles.arrowRight}
        style={{ scale: image === 1 && 0 }}
        src={arrow}
        alt="bouton pour aller a droite"
      />
      <p style={{ scale: image === 1 && 0 }}>
        {/* // numero de l'image affiché et nombre d'images total du tableau*/}
        {changeImg + 1}/{image}
      </p>
    </div>
  )
}

export default Caroussel
