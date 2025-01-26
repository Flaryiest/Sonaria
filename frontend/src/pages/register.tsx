import {Fade, Slide} from "react-awesome-reveal";
import "../style/register.css"
export default function RegisterPage() {
    return <div className="register-page-container">
        <div className="register-page">
        <div className="index-page-section-one">
                    <div className="grid"></div>
                    
                        <div className="index-page-section-one-content">
                            <Fade duration={300} triggerOnce>
                                <Slide direction="up" duration={400} triggerOnce>
                                <h1 className="index-page-section-one-header">
                                    Registration
                                </h1>
                                </Slide>
                            </Fade>
                            <Fade duration={300} delay={100} triggerOnce>
                                <Slide direction="up" delay={100} duration={400} triggerOnce>
                                    <p className="index-page-section-one-text">
                                        We are sorry to inform you that registration is currently closed. We are working hard to bring you the best music education experience possible, and aim to start new classes during February 2025.
                                    </p>
                                </Slide>
                            </Fade>
                            <Slide direction="up" delay={250} duration={400} triggerOnce className="index-page-section-one-image-container">
                                <Fade duration={300} delay={250} triggerOnce className="index-page-section-one-image-container">
                                    <img
                                        src="/assets/piano.webp"
                                        className="index-page-section-one-image"
                                    ></img>

                                </Fade>
                            </Slide>
                        </div>
                        </div>
                        </div>
    </div>
}