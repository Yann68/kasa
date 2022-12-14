import starRed from '../../assets/starRed.png'
import starGrey from '../../assets/starGrey.png'
import styles from './index.module.css'

function Rating({ rating }) {
  // tableau qui contient les 5 étoiles
  const stars = [1, 2, 3, 4, 5]
  return (
    // boucle du tableau stars pour affiché la bonne couleur aux étoiles en fonction du nombre de note
    <div className={styles.stars}>
      {stars.map((star, id) =>
        rating.rating >= star ? (
          <img key={id} src={starRed} alt="etoile rouge" />
        ) : (
          <img key={id} src={starGrey} alt="etoile grise" />
        )
      )}
    </div>
  )
}

export default Rating
