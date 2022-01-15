import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Link to="/about">O serwisie</Link>
            <Link to="/terms">Zgody</Link>
            <Link to="/privacy">Prywatność</Link>
            <Link to="/faq">FAQ</Link>
        </div>
    )
}

export default Footer