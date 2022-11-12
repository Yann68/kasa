// Importation du style et du hook
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

// Fonction de la carte
function Card({ props }) {
  // Variable et fonction pour navigué vers une route définie
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/logement/${props.id}`)
      }}
      className={styles.card}
    >
      <img className={styles.image} src={props.cover} alt="carte du logement" />
      <p className={styles.titleCard}>{props.title}</p>
    </div>
  )
}
export default Card
