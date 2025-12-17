import logo from '/logo.png';
import '../styles/Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" />
                <div className='menu'>
                    <NavLink className="link" to="/">Accueil</NavLink>
                    <NavLink className='link link-about' to="/about">A Propos</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default Header