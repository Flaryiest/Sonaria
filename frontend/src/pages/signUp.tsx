import '../style/signUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function SignUpPage() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const formData = new FormData(event.target.closest('form'))
        const data = Object.fromEntries(formData.entries())
        return data
    }

    const signUp = async (event: any) => {
        event.preventDefault()
        const data = handleSubmit(event)
        console.log(data)
        const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        if (response.status == 400) {
            console.log(response, 'response')
            setError('Sign up failed. Please check your details and try again.')
        } else if (response.status == 200) {
            navigate('/committees')
        }
    }

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-left">
                    <div className="signup-left-content">
                        <h1 className="signup-title">Create your account</h1>
                        <p className="signup-info">
                            Join LifePod to access innovative medical assistance
                            at your fingertips. Stay connected, stay safe, and
                            empower yourself with cutting-edge technology.
                        </p>
                    </div>
                </div>
                <div className="signup-right">
                    <div className="signup-form-container">
                        <h2 className="signup-form-title">Sign up</h2>
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=""
                                required
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder=""
                                required
                            />

                            <label htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder=""
                                required
                            />

                            <p className="signup-info-text">
                                By signing up, you agree to our Terms of Service
                                and Privacy Policy.
                            </p>
                            <button
                                type="submit"
                                className="signup-submit"
                                onClick={signUp}
                            >
                                Sign Up
                            </button>
                            <p className="signup-info-text-two">
                                <Link to="/login">
                                    Already have an{' '}
                                    <span className="signup-redirect-text">
                                        account?
                                    </span>
                                </Link>
                            </p>
                            {error && <p className="error-text">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
