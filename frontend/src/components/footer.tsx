import '../style/footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="footer-nav">
                        <Link to="/" className="footer-logo-text">
                            Elvaria
                        </Link>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2025 Elvaria Music Foundation - Website by Eric Zuo
                </div>
            </div>
        </div>
    )
}
