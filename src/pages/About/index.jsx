import styles from '../About/index.module.css'
import { useEffect, useState } from 'react'
import ComponentCollapse from '../../components/Collapse'
import info from '../../models/info.json'
import Banner from '../../components/Banner'

function About() {
  const [infoList, setInfoList] = useState([])
  useEffect(() => {
    setInfoList(info)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <section className={styles.section}>
        {infoList.map((collapse, id) => (
          <ComponentCollapse
            key={id}
            title={collapse.name}
            content={<p>{collapse.info}</p>}
          />
        ))}
      </section>
    </main>
  )
}
export default About
