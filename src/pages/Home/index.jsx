import styles from './index.module.css'
import { useEffect, useState } from 'react'
import housing from '../../models/housing.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'

// fonction de la page d'accueil
function Home() {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(housing)
    document.title = 'Kasa - Accueil'
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner title={'Chez vous, partout et ailleurs'} />
      </div>
      <section className={styles.section}>
        {list.map((card, id) => (
          <Card key={id} card={card} />
        ))}
      </section>
    </main>
  )
}
export default Home
