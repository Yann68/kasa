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
      <Banner />
      <section className={styles.section}>
        {list.map((card, id) => (
          <Card key={id} props={card} />
        ))}
      </section>
    </main>
  )
}
export default Home
