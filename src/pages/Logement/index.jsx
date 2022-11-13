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
            <Caroussel image={props} />
            <section>
              <div className={styles.info}>
                <div className={styles.location}>
                  <h2>{props.title}</h2>
                  <p>{props.location}</p>
                </div>

                <div className={styles.profil}>
                  <p>{props.host.name}</p>
                  <img
                    className={styles.photo}
                    src={props.host.picture}
                    alt="profil"
                  />
                </div>
              </div>
            </section>
            <section className={styles.rating}>
              <Tag
                content={
                  <ul>
                    {props.tags.map((tag, id) => (
                      <li key={id} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                }
              />
              <Rating key={id} rating={props} />
            </section>
            <section className={styles.collapse}>
              <div className={styles.contentCollapse}>
                <ComponentCollapse
                  title="Description"
                  content={props.description}
                />
              </div>
              <div className={styles.contentCollapse}>
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
              </div>
            </section>
          </main>
        ))}
    </>
  )
}
export default Logement
