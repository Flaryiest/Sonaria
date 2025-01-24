import '../style/navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <Link to="/" className="navbar-logo-text">
                        Sonaria
                    </Link>
                </div>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/info" className="navbar-base-link">
                        Info
                    </Link>
                    <Link to="/organization" className="navbar-base-link">
                        Organization
                    </Link>
                    <Link to="/donate" className="navbar-base-link">
                        Donate
                    </Link>
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
                    onClick={() => setMenuOpen(!menuOpen)}
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
