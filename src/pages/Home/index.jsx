import styles from './index.module.css'
import { useEffect, useState } from 'react'
import housing from '../../housing.json'
import Card from '../../components/Card'

function Home() {
  const [gallery, setGallery] = useState([])
  useEffect(() => {
    setGallery(housing)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
        <div className={styles.backgroundFiltre}></div>
      </div>
      <main className={styles.main}>
        {/* <div className={styles.container}> */}
          {gallery.map((location, id) => (
            <Card key={id} location={location} />
          ))}
        {/* </div> */}
      </main>
    </section>
  )
}
export default Home
