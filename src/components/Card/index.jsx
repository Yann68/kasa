// Importation du style et du hook
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

// Fonction de la carte
function Card({ card }) {
  // Variable et fonction pour navigué vers une route définie
  const navigate = useNavigate()

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/logement/${card.id}`)
      }}
    >
      <img src={card.cover} alt="carte du logement" />
      <p>{card.title}</p>
      <div className={styles.filtre}></div>
    </div>
  )
}

export default Card
