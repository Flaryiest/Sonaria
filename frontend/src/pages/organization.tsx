import "../style/organization.css"
import Footer from "../components/footer"
export default function OrganizationPage() {
    return (
        <div className="organization-page-container">
            <div className="organization-page">
                <div className="organization-page-section-one">
                    <div className='organization-page-grid'></div>
                    <div className="organization-page-header-container">
                        <h1 className="organization-page-header">We are the people who make up Sonaria</h1>
                        <p className="organization-page-sub-header">Our philosophy is simple; hire great people and give them the resources needed to do their best work.</p>
                    </div>
                </div>
                <div className="organization-page-section-two">
                    <div className="organization-page-card-container">
                        <div className="organization-page-card-row">
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img src="/assets/dog.jpg" alt="A person playing a guitar" className="organization-page-card-image"/>
                                </div>
                                <h3 className="organization-page-card-name">Evan Li</h3>
                                <p className="organization-page-card-title">Founder & CEO</p>
                                <p className="organization-page-card-text">A student chained to the demands of the International Baccalaureate Diploma Programme, Evan Li finds refuge in his musical endeavours. </p>
                            </div>
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img src="/assets/dog.jpg" alt="A person playing a guitar" className="organization-page-card-image"/>
                                </div>
                                <h3 className="organization-page-card-name">Evan Li</h3>
                                <p className="organization-page-card-title">Founder & CEO</p>
                                <p className="organization-page-card-text">A student chained to the demands of the International Baccalaureate Diploma Programme, Evan Li finds refuge in his musical endeavours. </p>
                            </div>
                            <div className="organization-page-card">
                                <div className="organization-page-card-image-container">
                                    <img src="/assets/dog.jpg" alt="A person playing a guitar" className="organization-page-card-image"/>
                                </div>
                                <h3 className="organization-page-card-name">Evan Li</h3>
                                <p className="organization-page-card-title">Founder & CEO</p>
                                <p className="organization-page-card-text">A student chained to the demands of the International Baccalaureate Diploma Programme, Evan Li finds refuge in his musical endeavours. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
