import { Link } from 'react-router-dom'
import '../style/navbar.css'

export default function Navbar() {
    return <div className="navbar-container">
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="navbar-logo-text">Sonaria</Link>
            </div>
            <div className="navbar-links">
                <Link to="/info" className="navbar-base-link">Info</Link>
                <Link to="/organization" className="navbar-base-link">Organization</Link>
                <Link to="/contact"  className="navbar-base-link">Contact</Link>
            </div>
            <div className="navbar-onboard-links">
                <Link to="/login" className="navbar-login-link">Log in</Link>
                <Link to="/signup" className="navbar-signup-link">Sign up</Link>
            </div>
        </div>
    </div>
}