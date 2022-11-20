import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel'
import ComponentCollapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import housing from '../../models/housing.json'
import styles from './index.module.css'

function Logement() {
  const { id } = useParams()
  const [list, setList] = useState([])

  useEffect(() => {
    setList(housing)
  }, [])

  return (
    <>
      {list
        .filter((e) => e.id === id)
        .map((props, id) => (
          <main key={id}>
            <Caroussel images={props} />
            <section className={styles.contenairInfo}>
              <div className={styles.info}>
                <h2>{props.title}</h2>
                <p>{props.location}</p>
                <Tag key={id} tags={props} />
              </div>
              <div className={styles.profilRating}>
                <div className={styles.profil}>
                  <p>{props.host.name}</p>
                  <img src={props.host.picture} alt="profil" />
                </div>
                <Rating rating={props} />
              </div>
            </section>

            <section className={styles.collapse}>
              <ComponentCollapse
                className={styles.content}
                title="Description"
                content={<p>{props.description}</p>}
              />
              <ComponentCollapse
                title="Equipements"
                content={
                  <ul className={styles.listEquipment}>
                    {props.equipments.map((equipment, id) => (
                      <li key={id}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </section>
          </main>
        ))}
    </>
  )
}
export default Logement
