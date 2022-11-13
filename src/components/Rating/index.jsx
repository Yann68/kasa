import starRed from '../../assets/starRed.png'
import starGrey from '../../assets/starGrey.png'

function Rating({ rating }) {
  // tableau qui contient les 5 étoiles
  const stars = [1, 2, 3, 4, 5]
  return (
    // boucle du tableau pour affiché la bonne couleur d'étoile en fonction du nombre de note
    <div>
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
