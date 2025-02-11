import '../style/organization.css'
import Footer from '../components/footer'
import { Fade, Slide } from 'react-awesome-reveal'
export default function OrganizationPage() {
    return (
        <div className="organization-page-container">
            <div className="organization-page">
                <div className="organization-page-section-one">
                    <div className="organization-page-grid"></div>
                    <Fade
                        className="organization-page-header-container"
                        duration={400}
                        triggerOnce
                    >
                        <Slide
                            className="animation"
                            direction="up"
                            duration={800}
                            triggerOnce
                        >
                            <h1 className="organization-page-header">
                                We are the people who make up Elvaria
                            </h1>
                            <p className="organization-page-sub-header">
                                Our philosophy is simple; hire great people and
                                give them the resources needed to do their best
                                work.
                            </p>
                        </Slide>
                    </Fade>
                </div>
                <div className="organization-page-section-two">
                    <div className="organization-page-card-container">
                        <div className="organization-page-card-row">
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img
                                        src="/assets/dog.webp"
                                        alt="A person playing a guitar"
                                        className="organization-page-card-image"
                                    />
                                </div>
                                <h3 className="organization-page-card-name">
                                    Evan Li
                                </h3>
                                <p className="organization-page-card-title">
                                    Founder & CEO
                                </p>
                                <p className="organization-page-card-text">
                                    A student chained to the demands of the
                                    International Baccalaureate Diploma
                                    Programme, Evan Li finds refuge in his
                                    musical endeavours. He has made it his
                                    mission to ensure that children will have
                                    access to affordable music education, and
                                    that classes run smoothly. When he is not
                                    getting lost in downtown Calgary, he can be
                                    found dominating the badminton court or
                                    playing the piano.
                                </p>
                            </div>
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img
                                        src="/assets/dog.webp"
                                        alt="A person playing a guitar"
                                        className="organization-page-card-image"
                                    />
                                </div>
                                <h3 className="organization-page-card-name">
                                    Vivian Wei
                                </h3>
                                <p className="organization-page-card-title">
                                    Co-Founder & Director
                                </p>
                                <p className="organization-page-card-text">
                                </p>
                            </div>
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img
                                        src="/assets/dog.webp"
                                        alt="A person playing a guitar"
                                        className="organization-page-card-image"
                                    />
                                </div>
                                <h3 className="organization-page-card-name">
                                    Maegan Cheung
                                </h3>
                                <p className="organization-page-card-title">
                                    Co-Founder & Director
                                </p>
                                <p className="organization-page-card-text">
                                </p>
                            </div>
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img
                                        src="/assets/dog.webp"
                                        alt="A person playing a guitar"
                                        className="organization-page-card-image"
                                    />
                                </div>
                                <h3 className="organization-page-card-name">
                                    James Zhang
                                </h3>
                                <p className="organization-page-card-title">
                                    Co-Founder & Director
                                </p>
                                <p className="organization-page-card-text">
                                </p>
                            </div>
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img
                                        src="/assets/dog.webp"
                                        alt="A person playing a guitar"
                                        className="organization-page-card-image"
                                    />
                                </div>
                                <h3 className="organization-page-card-name">
                                    Eric Zuo
                                </h3>
                                <p className="organization-page-card-title">
                                    Co-Founder & Director
                                </p>
                                <p className="organization-page-card-text">
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
