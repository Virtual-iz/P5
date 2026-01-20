import logoWhite from '../assets/logo-white.png';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className='copyright'>
                <img src={logoWhite} className="logo" alt="Logo en blanc" />
                <p> @ 2020 Kasa.
                All rights reserved 
                </p>
            </div>
        </footer>
    )
}

export default Footer