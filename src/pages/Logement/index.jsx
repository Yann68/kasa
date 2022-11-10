import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import listHousing from '../../list/listHousing.json'
import styles from './index.module.css'

function Logement() {
  const { id } = useParams()
  const [list, setList] = useState([])

  useEffect(() => {
    setList(listHousing)
  }, [])

  return (
    <div>
      {list
        .filter((e) => e.id === id)
        .map((props, id) => (
          <main key={id} className={styles.main}>
      <div className={styles.carroussel}>
      </div>
<p className={styles.containerName}>{props.host.name}</p>
          
          </main>
        ))}
    </div>
  )
}
export default Logement
