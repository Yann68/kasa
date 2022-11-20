// Importation du style, images et hook
import styles from './index.module.css'

// Fonction de la bannière
function Banner({ title }) {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.bannerFiltre}></div>
    </div>
  )
}
export default Banner
