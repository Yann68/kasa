import styles from '../About/index.module.css'
import { useEffect, useState } from 'react'
import ComponentCollapse from '../../components/Collapse'
import listInfo from '../../list/listInfo.json'
import Banner from '../../components/Banner'

function About() {
  const [list, setTest] = useState([])
  useEffect(() => {
    setTest(listInfo)
  }, [])

  return (
    <main className={styles.main}>
      <Banner />
      {list.map((info, name) => (
        <ComponentCollapse key={name} info={info} />
      ))}
    </main>
  )
}
export default About
