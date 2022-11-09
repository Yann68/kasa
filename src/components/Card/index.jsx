// Importation du style et du hook
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

// Fonction de la carte
function Card({ propsCard }) {
  // Variable et fonction pour navigué vers une route définie
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/logement/${propsCard.id}`)
  }
  // Utilisation de la fonction handleClick sur la carte
  return (
    <div onClick={handleClick} className={styles.card}>
      <img className={styles.image} src={propsCard.cover} alt="logement" />
      <p className={styles.titleCard}>{propsCard.title}</p>
    </div>
  )
}
export default Card
