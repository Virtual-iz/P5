import '../styles/ErrorPage.scss'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
    <main>
        <article className='error'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <p><a href="#">Retourner à la page d'accueil</a></p>
        </article>
    </main>
    )
}

export default ErrorPage
