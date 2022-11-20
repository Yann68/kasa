import { Link } from 'react-router-dom'
import styled from './index.module.css'

function Error() {
  return (
    <div className={styled.container}>
      <h1 className={styled.number}>404</h1>
      <p className={styled.text}>
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>
      <Link to="/" className={styled.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default Error
