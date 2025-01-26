import '../style/classes.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
export default function ClassesPage() {
    return (
        <div className="classes-page-container">
            <div className="classes-grid"></div>
            <div className="classes-grid-two"></div>
            <div className="glow gold"></div>
            <div className="glow pink"></div>
            <div className="classes-page">
                <div className="classes-page-section-one">
                    <div className="classes-page-header-container">
                        <div className="classes-page-header">Our Classes</div>
                        <div className="classes-page-sub-header">
                            We offer a variety of classes for students of all
                            ages and skill levels.
                        </div>
                        <div className="classes-page-section-one-button-container">
                            <Link
                                to="/register"
                                className="classes-page-section-one-register-button"
                            >
                                Register
                            </Link>
                            <Link
                                to="/contact"
                                className="classes-page-section-one-contact-button"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="classes-page-section-two">
                    <div className="classes-page-section-two-header">
                        Upcoming
                    </div>
                    <div className="classes-page-section-two-text">
                        We are planning to host some group classes in the near
                        future in the first quarter of 2025. In addition, we are
                        currently accepting applicants for individual classes on
                        a rolling basis. Interested individuals can apply by
                        filling out the form above.
                    </div>
                </div>
                <div className="classes-page-section-two">
                    <div className="classes-page-section-two-header">
                        Our Activities
                    </div>
                    <div className="classes-page-section-two-text">
                        We have been hosting individual classes for the past few
                        months very successfully. Our students have shown
                        remarkable progress, and we hope to expand the scope of
                        our activities in the near future to include more
                        diverse and comprehensive music education programs.
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
