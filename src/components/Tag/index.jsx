import styles from './index.module.css'

function Tag({ content }) {
  // const content = useRef(null)
  return <div className={styles.tag}>{content}</div>
}

export default Tag

/* <div ref={content}>{tag.content}</div> */
