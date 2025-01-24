import '../style/indexPage.css'
import { Link } from 'react-router-dom'
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
                    <div className="index-page-section-two-card-container">
                        <div className="index-page-section-two-card-row border-bottom">
                            <div className="index-page-section-two-card border-right">
                                <div className="index-page-section-two-card-image-container">
                                    <img src="/assets/room.webp" className="index-page-section-two-card-image"/>
                                </div>
                                <h3 className="index-page-section-two-card-header">Temp</h3>
                                <p className='index-page-section-two-card-text'>Spicy and Sweet</p>
                            </div>
                            <div className="index-page-section-two-card">
                                <div className="index-page-section-two-card-image-container">
                                    <img src="/assets/room.webp" className="index-page-section-two-card-image"/>
                                </div>
                                <h3 className="index-page-section-two-card-header">Temp</h3>
                                <p className='index-page-section-two-card-text'>Spicy and Sweet</p>
                            </div>
                        </div>
                        <div className="index-page-section-two-card-row">
                            <div className="index-page-section-two-card border-right">
                                <div className="index-page-section-two-card-image-container">
                                    <img src="/assets/room.webp" className="index-page-section-two-card-image"/>
                                </div>
                                <h3 className="index-page-section-two-card-header">Temp</h3>
                                <p className='index-page-section-two-card-text'>Spicy and Sweet</p>
                            </div>
                            <div className="index-page-section-two-card">
                                <div className="index-page-section-two-card-image-container">
                                    <img src="/assets/room.webp" className="index-page-section-two-card-image"/>
                                </div>
                                <h3 className="index-page-section-two-card-header">Temp</h3>
                                <p className='index-page-section-two-card-text'>Spicy and Sweet</p>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            <div className="index-page-section-three">
                <div className="index-page-section-three-content">
                    <div className="index-page-section-three-left">
                        <h2 className="index-page-section-three-header">Impact at a glance</h2>
                        <h3 className="index-page-section-three-text">Sonaria has been able to aid many in their musical journey.</h3>
                        <div className="index-page-section-three-content-container">
                            <div className="index-page-section-three-stats-container">
                                <div className="index-page-section-three-stat">
                                    <p className="index-page-section-three-stat-text">Students</p>
                                    <h3 className="index-page-section-three-stat-header">100+</h3>
                                </div>
                                <div className="index-page-section-three-stat">
                                    <p className="index-page-section-three-stat-text">Teachers</p>
                                    <h3 className="index-page-section-three-stat-header">12</h3>
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
                    <h2 className="index-page-section-four-header">Testimonies</h2>
                    <p className="index-page-section-four-text">We have worked with many people, and we hope to work with you in the future.</p>
                    <div className="index-page-section-four-card-container">
                        <div className="index-page-section-four-card-row">
                            <div className="index-page-section-four-card green-gradient">
                                <div className="index-page-section-four-card-image-container">Piano</div>
                                <p className="index-page-section-four-card-text">Lorem ipsum dolor sit amet, <span className="bold black">consectetur adipisicing elit.</span> Velit perferendis voluptas dolore debitis provident et aspernatur expedita fugit. Suscipit odit nostrum maxime repellat alias assumenda, eius optio harum non magni?</p>
                                <div className="index-page-section-four-card-info">
                                    <p className="index-page-section-four-card-name">Eric Zuo</p>
                                    <p className="index-page-section-four-card-title">Student</p>
                                </div>
                            </div>
                            <div className="index-page-section-four-card orange-gradient">
                                <div className="index-page-section-four-card-image-container">Piano</div>
                                <p className="index-page-section-four-card-text">Lorem ipsum dolor sit amet, <span className="bold black">consectetur adipisicing elit.</span> Velit perferendis voluptas dolore debitis provident et aspernatur expedita fugit. Suscipit odit nostrum maxime repellat alias assumenda, eius optio harum non magni?</p>
                                <div className="index-page-section-four-card-info">
                                    <p className="index-page-section-four-card-name">Eric Zuo</p>
                                    <p className="index-page-section-four-card-title">Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}