import '../style/contact.css'
export default function ContactPage() {
    return (
        <div className="contact-page-container">
            <div className="contact-page">
                <div className="contact-page-left">
                    <h2 className="contact-page-logo">Sonaria</h2>
                    <h1 className="contact-page-header">We'd love to help</h1>
                    <p className="contact-page-text">
                        We're a team of experienced musicians ready to help.
                        We'll get in touch within 72 hours.
                    </p>
                    <form className="contact-form">
                        <div className="contact-form-row">
                            <div className="contact-form-group">
                                <label htmlFor="first-name">First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                />
                            </div>
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="contact-page-submit-button"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="contact-page-right">
                    <div className="contact-page-right-image-container">
                        <img
                            src="/assets/music-background.webp"
                            alt="Isometric illustration of a person playing a piano"
                            className="contact-page-right-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
