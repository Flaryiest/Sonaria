import '../style/indexPage.css'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Footer from '../components/footer.tsx'
import { Fade, Slide } from 'react-awesome-reveal'
export default function IndexPage() {
    return (
        <div className="index-page-container">
            <div className="index-page">
                <div className="index-page-section-one">
                    <div className="grid"></div>

                    <div className="index-page-section-one-content">
                        <Fade duration={300} triggerOnce>
                            <Slide direction="up" duration={400} triggerOnce>
                                <h1 className="index-page-section-one-header">
                                    Where Music Meets Magic
                                </h1>
                            </Slide>
                        </Fade>
                        <Fade duration={300} delay={100} triggerOnce>
                            <Slide
                                direction="up"
                                delay={100}
                                duration={400}
                                triggerOnce
                            >
                                <p className="index-page-section-one-text">
                                    Sonaria is a registered non-profit
                                    organization striving to make musical
                                    education meet with accessibility.
                                </p>
                            </Slide>
                        </Fade>
                        <Fade duration={300} delay={200} triggerOnce>
                            <Slide
                                direction="up"
                                delay={200}
                                duration={400}
                                triggerOnce
                            >
                                <div className="index-page-section-one-buttons">
                                    <Link
                                        to="/classes"
                                        className="index-page-section-one-events-button"
                                    >
                                        Events
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="index-page-section-one-donate-button"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </Slide>
                        </Fade>
                        <Slide
                            direction="up"
                            delay={250}
                            duration={400}
                            triggerOnce
                            className="index-page-section-one-image-container"
                        >
                            <Fade
                                duration={300}
                                delay={250}
                                triggerOnce
                                className="index-page-section-one-image-container"
                            >
                                <img
                                    src="/assets/piano.webp"
                                    className="index-page-section-one-image"
                                    alt="isometric piano image"
                                ></img>
                            </Fade>
                        </Slide>
                    </div>
                </div>
                <div className="index-page-section-two">
                    <div className="index-page-section-two-content">
                        <div className="index-page-section-two-banner">
                            <p className="index-page-section-two-banner-text">
                                Our Instruments
                            </p>
                            <Marquee
                                className="index-page-section-two-marquee"
                                pauseOnHover={true}
                                autoFill={true}
                                gradient={true}
                                gradientColor="white"
                                gradientWidth={200}
                            >
                                <p className="index-page-section-two-marquee-item">
                                    Piano
                                </p>
                                <p className="index-page-section-two-marquee-item">
                                    Violin
                                </p>
                            </Marquee>
                        </div>
                        <div className="index-page-section-two-header-container">
                            <h2 className="index-page-section-two-header">
                                Empowering and engaging with local communities
                                in Calgary.
                            </h2>
                            <p className="index-page-section-two-text">
                                Sonaria is more than just than just an
                                educational organization. We help support the
                                communities around us with a rich and welcoming
                                experience.
                            </p>
                        </div>
                        <div className="index-page-section-two-card-container">
                            <div className="index-page-section-two-card-row border-bottom">
                                <div className="index-page-section-two-card border-right">
                                    <div className="index-page-section-two-card-image-container">
                                        <img
                                            src="/assets/room.webp"
                                            className="index-page-section-two-card-image"
                                            alt="isometric music classroom image"
                                        />
                                    </div>
                                    <h3 className="index-page-section-two-card-header">
                                        Blending Music with Education
                                    </h3>
                                    <p className="index-page-section-two-card-text">
                                        At Sonaria, we blend music with
                                        education in dynamic ways to create a
                                        unique learning experience. Our approach
                                        integrates musical concepts with
                                        academic subjects, making learning more
                                        engaging and effective. By combining
                                        these elements, we help students develop
                                        a deeper understanding and appreciation
                                        of both music and their academic
                                        studies.
                                    </p>
                                </div>
                                <div className="index-page-section-two-card">
                                    <div className="index-page-section-two-card-image-container">
                                        <img
                                            src="/assets/room.webp"
                                            className="index-page-section-two-card-image"
                                            alt="isometric music classroom image"
                                        />
                                    </div>
                                    <h3 className="index-page-section-two-card-header">
                                        Free Classes for All
                                    </h3>
                                    <p className="index-page-section-two-card-text">
                                        We offer classes at no cost because we
                                        believe that everyone should have access
                                        to music education. Our mission is to
                                        remove financial barriers and provide
                                        equal opportunities for all individuals
                                        to learn and grow through music. By
                                        offering free classes, we aim to foster
                                        a more inclusive and diverse musical
                                        community.
                                    </p>
                                </div>
                            </div>
                            <div className="index-page-section-two-card-row">
                                <div className="index-page-section-two-card border-right">
                                    <div className="index-page-section-two-card-image-container">
                                        <img
                                            src="/assets/room.webp"
                                            className="index-page-section-two-card-image"
                                            alt="isometric music classroom image"
                                        />
                                    </div>
                                    <h3 className="index-page-section-two-card-header">
                                        Benefits of Learning Music
                                    </h3>
                                    <p className="index-page-section-two-card-text">
                                        Learning music benefits people in
                                        numerous ways, enhancing cognitive
                                        abilities and emotional well-being.
                                        Studies have shown that music education
                                        can improve memory, attention, and
                                        problem-solving skills. Additionally,
                                        engaging with music can reduce stress,
                                        boost self-esteem, and provide a sense
                                        of accomplishment and joy.
                                    </p>
                                </div>
                                <div className="index-page-section-two-card">
                                    <div className="index-page-section-two-card-image-container">
                                        <img
                                            src="/assets/room.webp"
                                            className="index-page-section-two-card-image"
                                            alt="isometric music classroom image"
                                        />
                                    </div>
                                    <h3 className="index-page-section-two-card-header">
                                        Comprehensive Music Education
                                    </h3>
                                    <p className="index-page-section-two-card-text">
                                        We provide both music theory and
                                        individualized lessons to cater to each
                                        student's unique needs. Our
                                        comprehensive curriculum covers
                                        fundamental concepts, advanced
                                        techniques, and practical applications.
                                        By offering personalized instruction, we
                                        ensure that each student receives the
                                        guidance and support they need to
                                        succeed in their musical journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-page-section-three">
                    <div className="index-page-section-three-content">
                        <div className="index-page-section-three-left">
                            <h2 className="index-page-section-three-header">
                                Impact at a glance
                            </h2>
                            <h3 className="index-page-section-three-text">
                                Sonaria has been able to aid many in their
                                musical journey.
                            </h3>
                            <div className="index-page-section-three-content-container">
                                <div className="index-page-section-three-stats-container">
                                    <div className="index-page-section-three-stat">
                                        <p className="index-page-section-three-stat-text">
                                            Students
                                        </p>
                                        <h3 className="index-page-section-three-stat-header">
                                            100+
                                        </h3>
                                    </div>
                                    <div className="index-page-section-three-stat">
                                        <p className="index-page-section-three-stat-text">
                                            Teachers
                                        </p>
                                        <h3 className="index-page-section-three-stat-header">
                                            12
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index-page-section-three-right">
                            <div className="index-page-section-three-image-container">
                                <div className="bars">
                                    <div className="bars__item"></div>
                                    <div className="bars__item"></div>
                                    <div className="bars__item"></div>
                                    <div className="bars__item"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-page-section-four">
                    <div className="index-page-section-four-content">
                        <h2 className="index-page-section-four-header">
                            Testimonies
                        </h2>
                        <p className="index-page-section-four-text">
                            We have worked with many people, and we hope to work
                            with you in the future.
                        </p>
                        <div className="index-page-section-four-card-container">
                            <div className="index-page-section-four-card-row">
                                <div className="index-page-section-four-card green-gradient">
                                    <div className="index-page-section-four-card-image-container">
                                        Piano
                                    </div>
                                    <p className="index-page-section-four-card-text">
                                        "My experience at Sonaria has been
                                        exceptional. The instructors are{' '}
                                        <span className="bold black">
                                            highly skilled and dedicated
                                        </span>{' '}
                                        to their craft. Through their guidance,
                                        I have significantly improved my piano
                                        skills and developed a deeper
                                        appreciation for music. Sonaria's
                                        approach to music education is both
                                        innovative and effective."
                                    </p>
                                    <div className="index-page-section-four-card-info">
                                        <p className="index-page-section-four-card-name">
                                            Alex Johnson
                                        </p>
                                        <p className="index-page-section-four-card-title">
                                            Student
                                        </p>
                                    </div>
                                </div>
                                <div className="index-page-section-four-card orange-gradient">
                                    <div className="index-page-section-four-card-image-container">
                                        Piano
                                    </div>
                                    <p className="index-page-section-four-card-text">
                                        "Sonaria has provided me with an
                                        outstanding music education experience.
                                        The free classes have allowed me to
                                        pursue my passion for music without
                                        financial burden. I am grateful for the
                                        opportunities Sonaria has given me."
                                    </p>
                                    <div className="index-page-section-four-card-info">
                                        <p className="index-page-section-four-card-name">
                                            Jamie Lee
                                        </p>
                                        <p className="index-page-section-four-card-title">
                                            Student
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index-page-section-four-call-to-action">
                            Are you a student?{' '}
                            <Link
                                to="/info"
                                className="index-page-section-four-call-to-action-link"
                            >
                                <span className="bold">Join Us</span>{' '}
                                <img src="/assets/arrow-up-right.svg" alt="arrow link"></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
