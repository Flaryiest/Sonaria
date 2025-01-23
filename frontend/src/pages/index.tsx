import '../style/indexPage.css'
import { Link } from 'react-router-dom'
import Fade from 'react-awesome-reveal'

function IndexPage() {
    return (
        <div className="index-page">
            <div className="index-page-section-one">
                <div className="index-page-section-one-content">
                    <Fade>
                        <div className="index-page-section-one-sub-header">
                            <span className="index-page-section-one-sub-header-two">
                                Accessible Emergency Care for Everyone.
                            </span>
                        </div>
                        <h1 className="index-page-section-one-header">
                            <span className="index-page-aqua">
                                Revolutionizing First Aid with Smart Technology.
                            </span>
                        </h1>
                    </Fade>
                    <div className="index-page-section-one-text">
                        Introducing a cutting-edge device designed to save
                        lives. Our smart medical box, hosted in public any
                        public area is fit with solar-powered technologies that
                        ensure that help is always accessible anywhere, anytime.
                        Our goal is to guide anyone through the toughest or
                        scariest moments using visual guides and step-by-step
                        instructions by first responders. Through an easy-to-use
                        built-in UI and transcriptions, all that is required is
                        a press of a button and a call for help!
                    </div>
                    <Link to="/info" className="index-page-section-one-button">
                        <div>Learn More</div>
                    </Link>
                    <div className="index-page-glow-one"></div>
                    <img
                        className="index-page-section-one-image"
                        src="/assets/front.jpg"
                        alt="Smart Medical Box"
                    />
                </div>
            </div>
            <div className="index-page-section-two">
                <div className="index-page-section-two-content">
                    <Fade>
                        <h2 className="index-page-section-two-header">
                            How It Works
                        </h2>
                    </Fade>
                    <div className="index-page-section-two-statement">
                        <div className="index-page-section-two-statement-header">
                            Addressable LEDs + Alarm
                        </div>
                        <div className="index-page-section-two-statement-text">
                            The box is equipped with 8 different indicator
                            lights for a variety of medical necessities for our
                            responders to quickly guide users through the
                            process of first-aid. As a result, we are able to
                            close the barrier between first-responders and
                            people who require help through an interactive
                            process.
                        </div>
                    </div>
                    <div className="index-page-section-two-statement">
                        <div className="index-page-section-two-statement-header">
                            Solar power
                        </div>
                        <div className="index-page-section-two-statement-text">
                            To ensure that the lifepod can be integrated in all
                            areas around cities and even the most remote areas,
                            we have equipped our boxes with a solar panel and
                            the batteries required to sustain day and night
                            usage.
                        </div>
                    </div>
                    <div className="index-page-section-two-statement">
                        <div className="index-page-section-two-statement-header">
                            Cellular Data
                        </div>
                        <div className="index-page-section-two-statement-text">
                            To further boost the versatility of locations that
                            the box can be integrated, we use cellular data to
                            ensure that the interface and IoT communications can
                            be as seamless and reliable as possible while still
                            providing the range required for any scale of
                            operation anywhere.
                        </div>
                    </div>
                </div>
            </div>
            <div className="index-page-section-three">
                <div className="index-page-section-three-content">
                    <div className="index-page-section-three-left">
                        <img
                            className="index-page-section-three-image"
                            src="/assets/back.jpg"
                            alt="Emergency Assistance"
                        />
                    </div>
                    <div className="index-page-section-three-right">
                        <h2 className="index-page-section-three-header">
                            Empowering Communities
                        </h2>
                        <div className="index-page-section-three-text">
                            This innovative product bridges the gap between
                            emergencies and professional medical care. It
                            empowers individuals and communities to act
                            confidently in critical moments, knowing expert help
                            is just a tap away.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
