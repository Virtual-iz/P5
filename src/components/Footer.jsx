import logoWhite from '../assets/logo-white.png';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            
            <img src={logoWhite} class="logo" alt="Logo en blanc" />
            <p>
            <span>@ 2020 Kasa.</span>
            <span>All rights reserved</span>
            </p>
        </footer>
    )
}

export default Footer