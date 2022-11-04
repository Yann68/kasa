import styles from "./index.module.css"
import {Link} from "react-router-dom"

function Card({location}) {
    return (
        
    <div className={styles.card}>
        <Link to="/logement/:id">
       <h3 className={styles.title}>{location.title}</h3>
       <img src={location.cover} alt={location.title} className={styles.image} />
       </Link>
    </div>
)}
export default Card;