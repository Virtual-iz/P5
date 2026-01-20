import logo from '/logo.png';
import '../styles/Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                
                <NavLink className="link" to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <div className='menu'>
                    <NavLink className="link" to="/">Accueil</NavLink>
                    <NavLink className='link' to="/about">A Propos</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default Header