
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'


function Card ({propsCard}) {

const navigate = useNavigate()

function handleClick() {
  navigate(`/logement/${propsCard.id}`)
}

  return (
    <div onClick={handleClick} className={styles.card}>
      <img className={styles.image} src={propsCard.cover} alt="logement" />
      <p className={styles.titleCard}>{propsCard.title}</p>
    </div>
  )
}
export default Card
