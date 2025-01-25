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
                                to="/events"
                                className="classes-page-section-one-register-button"
                            >
                                Register
                            </Link>
                            <Link
                                to="/donate"
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Alias voluptatibus, temporibus dolorum aliquam
                        illum quidem explicabo! Natus, laborum vel beatae,
                        suscipit modi eveniet autem sint asperiores nemo magnam
                        ullam! Itaque.
                    </div>
                </div>
                <div className="classes-page-section-two">
                    <div className="classes-page-section-two-header">
                        Our Activities
                    </div>
                    <div className="classes-page-section-two-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Alias voluptatibus, temporibus dolorum aliquam
                        illum quidem explicabo! Natus, laborum vel beatae,
                        suscipit modi eveniet autem sint asperiores nemo magnam
                        ullam! Itaque.
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
