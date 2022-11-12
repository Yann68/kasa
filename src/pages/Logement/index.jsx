import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel'
import ComponentCollapse from '../../components/Collapse'
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
            <Caroussel props={props} />
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
                    {props.tags.map((tag) => (
                      <li key={id} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                }
              />
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
                    <ul>
                      {props.equipments.map((equipment) => (
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
