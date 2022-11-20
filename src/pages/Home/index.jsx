import styles from './index.module.css'
import { useEffect, useState } from 'react'
import housing from '../../models/housing.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import imageHome from '../../assets/img_home.jpg'

function Home() {
  const [list, setList] = useState([])
  useEffect(() => {
    setList(housing)
  }, [])

  return (
    <main className={styles.main}>
      <Banner image={imageHome} title={'Chez vous, partout et ailleurs'} />
      <section className={styles.section}>
        {list.map((card, id) => (
          <Card key={id} card={card} />
        ))}
      </section>
    </main>
  )
}
export default Home
