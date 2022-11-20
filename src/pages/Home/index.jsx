import styles from './index.module.css'
import { useEffect, useState } from 'react'
import housing from '../../models/housing.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'

function Home() {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(housing)
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
