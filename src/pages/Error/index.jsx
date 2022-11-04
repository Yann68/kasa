import { Link } from "react-router-dom"
import styled from "./index.module.css"

function Error() {
    return (
        <div>
            <div className={styled.container}>
                <h1 className={styled.errorNumber}>404</h1>
                <p className={styled.errorText}>Oups! La page que <br/> vous demandez n'existe pas.</p>
                <Link to="/accueil" className={styled.errorLink}>
                    Retourner sur la page d'accueil
                </Link>
            </div>

        </div>

    )
}

export default Error