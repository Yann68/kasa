import styles from './index.module.css'

function Tag({ content }) {
  return <div className={styles.tag}>{content}</div>
}

export default Tag
