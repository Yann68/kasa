import styles from '../About/index.module.css'
import ComponentCollapse from '../../components/Collapse'

function About() {

  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <div className={styles.backgroundFiltre}></div>
      </div>
      <ComponentCollapse>
        
      </ComponentCollapse>
    </section>
  )
}
export default About
