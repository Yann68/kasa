import styles from "./index.module.css"
function Banner() {

return (
    <div className={styles.backgroundImage}>
  <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
  <div className={styles.backgroundFiltre}></div>
</div>
)
}
export default Banner