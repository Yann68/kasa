import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from './index.module.css'

// fonction de la page d'erreur
function Error() {
  useEffect(() => {
    document.title = 'Kasa - Erreur'
  })
  return (
    <div className={styled.container}>
      <h1>404</h1>
      <p>
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>
      <Link to="/" className={styled.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default Error
