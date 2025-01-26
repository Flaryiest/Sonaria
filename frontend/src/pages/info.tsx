import '../style/info.css'
import Marquee from 'react-fast-marquee'
import Footer from '../components/footer'
export default function InfoPage() {
    return (
        <div className="info-page-container">
            <div className="info-page">
                <div className="info-page-section-one">
                    <div className="info-page-grid"></div>
                    <div className="info-page-header-container">
                        <h1 className="info-page-header">
                            A dedicated team committed to advancing education by
                            conducting high quality courses.
                        </h1>
                        <p className="info-page-sub-header">
                            {' '}
                            We're a non-profit organization striving to help
                            others
                        </p>
                    </div>
                    <Marquee
                        className="info-page-section-one-marquee"
                        pauseOnHover={true}
                        autoFill={true}
                        gradient={true}
                        gradientColor="white"
                        gradientWidth={200}
                    >
                        <p className="index-page-section-two-marquee-item">
                            Mount Royal Conservatory
                        </p>
                        <p className="index-page-section-two-marquee-item">
                            University of Calgary
                        </p>
                    </Marquee>
                </div>
                <div className="info-page-section-two">
                    <h2 className="info-page-section-two-header">
                        What is Sonaria?
                    </h2>
                    <p className="info-page-section-two-text">
                        Sonaria is a not for profit music foundation. We provide
                        one-on-one and group lessons to less fortunate
                        individuals who are unable to afford paid classes. With
                        over 12 qualified teachers, we aim to make a large
                        impact.
                    </p>
                    <div className="info-page-section-two-video-container">
                        <video className="info-page-section-two-video" controls>
                            <source src="/assets/cat.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="info-page-section-three">
                    <h2 className="info-page-section-three-header">
                        We're on a Journey.
                    </h2>
                    <p className="info-page-section-three-text">
                        Our mission is to provide free music lessons to
                        individuals who are unable to afford paid classes. We
                        believe that music is a universal language that can
                        bring people together.
                    </p>
                </div>
                <div className="info-page-section-four">
                    <div className="info-page-section-four-header-container">
                        <img
                            src="/assets/star.svg"
                            alt="A briefcase"
                            className="info-page-section-four-image"
                        />
                        <h2 className="info-page-section-four-header">
                            Our Values
                        </h2>
                        <div className="info-page-section-four-card-container">
                            <div className="info-page-section-four-card-column">
                                <div className="info-page-section-four-card-template">
                                    <div className="info-page-section-four-card-cover"></div>
                                    <div className="info-page-section-four-card">
                                        <p className="info-page-section-four-card-number">
                                            01
                                        </p>
                                        <h3 className="info-page-section-four-card-header">
                                            Quality
                                        </h3>
                                        <p className="info-page-section-four-card-text">
                                            We strive to provide the highest
                                            quality music education to our
                                            students. Our experienced
                                            instructors are dedicated to
                                            delivering exceptional lessons
                                            tailored to each student's needs. We
                                            continuously update our curriculum
                                            to ensure it meets the highest
                                            standards.
                                        </p>
                                    </div>
                                </div>
                                <div className="info-page-section-four-card-template">
                                    <div className="info-page-section-four-card-cover"></div>
                                    <div className="info-page-section-four-card">
                                        <p className="info-page-section-four-card-number">
                                            03
                                        </p>
                                        <h3 className="info-page-section-four-card-header">
                                            Education
                                        </h3>
                                        <p className="info-page-section-four-card-text">
                                            Our comprehensive music education
                                            program covers a wide range of
                                            topics, from basic theory to
                                            advanced techniques. We provide
                                            personalized lessons to ensure each
                                            student receives the attention they
                                            need to succeed. Our goal is to make
                                            learning music enjoyable and
                                            effective.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-page-section-four-card-column second-column">
                                <div className="info-page-section-four-card-template">
                                    <div className="info-page-section-four-card-cover"></div>
                                    <div className="info-page-section-four-card">
                                        <p className="info-page-section-four-card-number">
                                            02
                                        </p>
                                        <h3 className="info-page-section-four-card-header">
                                            Community
                                        </h3>
                                        <p className="info-page-section-four-card-text">
                                            At Sonaria, we believe in fostering
                                            a strong sense of community among
                                            our students. We encourage
                                            collaboration and support, creating
                                            an environment where everyone feels
                                            welcome. Our community events and
                                            group classes help build lasting
                                            connections.
                                        </p>
                                    </div>
                                </div>
                                <div className="info-page-section-four-card-template">
                                    <div className="info-page-section-four-card-cover"></div>
                                    <div className="info-page-section-four-card">
                                        <p className="info-page-section-four-card-number">
                                            04
                                        </p>
                                        <h3 className="info-page-section-four-card-header">
                                            Accessibility
                                        </h3>
                                        <p className="info-page-section-four-card-text">
                                            We are committed to making music
                                            education accessible to everyone.
                                            Our free classes remove financial
                                            barriers, allowing individuals from
                                            all backgrounds to learn and grow.
                                            We strive to create an inclusive
                                            environment where everyone has the
                                            opportunity to explore their musical
                                            potential.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
