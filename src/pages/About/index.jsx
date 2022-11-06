import styles from '../About/index.module.css'
import { useEffect, useState } from 'react'
import ComponentCollapse from '../../components/Collapse'
import info from '../../array/about.json'

function About() {
  const [test, setTest] = useState([])
  useEffect(() => {
    setTest(info)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <div className={styles.backgroundFiltre}></div>
      </div>
      {test.map((info, name) => (
        <ComponentCollapse key={name} info={info} />
      ))}
    </section>
  )
}
export default About
