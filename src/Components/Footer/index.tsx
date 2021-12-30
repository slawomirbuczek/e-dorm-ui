import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Link to="/about">About</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/faq">FAQ</Link>
        </div>
    )
}

export default Footer