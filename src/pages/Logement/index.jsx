import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel'
import ComponentCollapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import housing from '../../models/housing.json'
import styles from './index.module.css'

// fonction de la page logement
function Logement() {
  const [list, setList] = useState([])
  const { id } = useParams()

  useEffect(() => {
    setList(housing)
    document.title = `Kasa - Logement `
  }, [])

  const product = list.find((e) => {
    return e.id === id
  })

  // si les id sont exacts on affiche le produit sinon on renvois sur la page d'erreur
  return (
    product && (
      <main>
        <Caroussel images={product} />
        <section className={styles.contenairInfo}>
          <div className={styles.info}>
            <h2>{product.title}</h2>
            <p>{product.location}</p>
            <Tag
              content={
                <ul>
                  {product.tags.map((tag, id) => (
                    <li key={id}>{tag}</li>
                  ))}
                </ul>
              }
            />
          </div>
          <div className={styles.profilRating}>
            <div className={styles.profil}>
              <p>{product.host.name}</p>
              <img src={product.host.picture} alt="profil" />
            </div>
            <Rating rating={product} />
          </div>
        </section>

        <section className={styles.collapse}>
          <ComponentCollapse
            title="Description"
            content={<p>{product.description}</p>}
          />
          <ComponentCollapse
            title="Equipements"
            content={
              <ul className={styles.listEquipment}>
                {product.equipments.map((equipment, id) => (
                  <li key={id}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    )
  )
}
export default Logement
