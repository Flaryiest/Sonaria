import '../style/navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setTimeout(() => {
            setMenuOpen(!menuOpen)
        }, 50)
    }

    const handleCloseMenu = () => {
        setTimeout(() => {
            setMenuOpen(false)
        }, 50)
    }

    return (
        <div className={`navbar-container ${menuOpen ? 'open' : ''}`}>
            <div className={`navbar ${menuOpen ? 'open' : ''}`}>
                <div className="navbar-logo">
                    <Link to="/" className="navbar-logo-text">
                        Sonaria
                    </Link>
                </div>
                <div onClick={handleCloseMenu} className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/info" className={`navbar-base-link ${menuOpen ? 'open' : ''}`}>
                        Info
                    </Link>
                    <Link to="/organization"  className={`navbar-base-link ${menuOpen ? 'open' : ''}`}>
                        Organization
                    </Link>
                    {menuOpen && <>
                        <Link to="/contact" className={`navbar-base-link ${menuOpen ? 'open' : ''}`} >
                            Contact
                        </Link>
                        <Link to="/classes"  className={`navbar-base-link ${menuOpen ? 'open' : ''}`}>
                            Classes
                        </Link>
                    </>}
                </div>
                <div className="navbar-onboard-links">
                    <Link to="/contact" className="navbar-login-link">
                        Contact
                    </Link>
                    <Link to="/classes" className="navbar-signup-link">
                        Classes
                    </Link>
                </div>
                <div
                    className="navbar-menu-icon"
                    onClick={handleMenuToggle}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M3 6h18M3 12h18M3 18h18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
