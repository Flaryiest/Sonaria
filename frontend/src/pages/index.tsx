import '../style/indexPage.css'
import { Link } from 'react-router-dom'
import Fade from 'react-awesome-reveal'
import Marquee from 'react-fast-marquee'
export default function IndexPage() {
    return <div className="index-page-container">
        <div className="index-page">
            <div className="index-page-section-one">
                <div className="grid">
                </div>
                    <div className="index-page-section-one-content">
                        <h1 className="index-page-section-one-header">Where Music Meets Magic</h1>
                        <p className="index-page-section-one-text">Sonaria is a registered non-profit organization striving to make musical education meet with accessibility.</p>
                        <div className="index-page-section-one-buttons">
                            <Link to="/events" className="index-page-section-one-events-button">Events</Link>
                            <Link to="/donate" className="index-page-section-one-donate-button">Donate</Link>
                        </div>
                        <div className="index-page-section-one-image-container">
                            <img src="/assets/piano.webp" className="index-page-section-one-image"></img>
                        </div>
                    </div>
            </div>
            <div className="index-page-section-two">
                <div className="index-page-section-two-content">
                    <div className="index-page-section-two-banner">
                        <p className="index-page-section-two-banner-text">Our Instruments</p>
                        <Marquee className="index-page-section-two-marquee" pauseOnHover={true} autoFill={true} gradient={true} gradientColor='white' gradientWidth={200}>
                            <p className="index-page-section-two-marquee-item">Piano</p>
                            <p className="index-page-section-two-marquee-item">Violin</p>
                        </Marquee>
                    </div>
                    <div className="index-page-section-two-header-container">
                        <h2 className="index-page-section-two-header">Empowering and engaging with local communities in Calgary.</h2>
                        <p className="index-page-section-two-text">Sonaria is more than just than just an educational organization. We help support the communities around us with a rich and welcoming experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}