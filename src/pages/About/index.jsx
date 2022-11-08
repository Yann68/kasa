import styles from '../About/index.module.css'
import { useEffect, useState } from 'react'
import ComponentCollapse from '../../components/Collapse'
import info from '../../list/listInfo.json'
import Banner from '../../components/Banner'

function About() {
  const [test, setTest] = useState([])
  useEffect(() => {
    setTest(info)
  }, [])

  return (
    <main className={styles.main}>
      <Banner />
      {test.map((props, name) => (
        <ComponentCollapse key={name} props={props}/>
        
      ))}
    </main>
  )
}
export default About
