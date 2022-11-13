// Importation du style, images et hook
import styles from './index.module.css'
import imageHome from '../../assets/img_home.jpg'
import imageAbout from '../../assets/img_about.jpg'
import { useLocation } from 'react-router-dom'

// Fonction de la bannière
function Banner() {
  // variable pour récuréré l'URL actuelle
  const location = useLocation()
  return (
    <div
      // Opération ternaire pour affiché l'image de fond correspondante a l'URL
      // Opération ternaire pour affiché ou non le titre de la bannière
      className={styles.backgroundImage}
      style={{
        backgroundImage:
          location.pathname === '/'
            ? `url(${imageHome})`
            : `url(${imageAbout})`,
      }}
    >
      {location.pathname === '/' ? (
        <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
      ) : null}

      <div className={styles.backgroundFiltre}></div>
    </div>
  )
}
export default Banner
