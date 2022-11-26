import styles from './index.module.css'

// Fonction de la bannière
function Banner({ title }) {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <div className={styles.filtre}></div>
    </div>
  )
}
export default Banner
