import '../style/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function LoginPage() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const formData = new FormData(event.target.closest('form'))
        const data = Object.fromEntries(formData.entries())
        return data
    }

    const login = async (event: any) => {
        event.preventDefault()
        const data = handleSubmit(event)
        console.log(data)
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        console.log('Response:', response)
        console.log('Set-Cookie Header:', response.headers.get('set-cookie'))
        if (response.status == 400) {
            setError('Sign up failed. Please check your details and try again.')
        } else if (response.status == 200) {
            navigate('/dashboard')
        }
    }
    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
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

                    <button
                        type="submit"
                        className="login-submit"
                        onClick={login}
                    >
                        Login
                    </button>

                    <p className="login-info-text">
                        By logging in, you agree to our Terms of Service and
                        Privacy Policy.
                    </p>
                    <p className="signup-info-text-two">
                        <Link to="/signup">
                            Need an{' '}
                            <span className="signup-redirect-text">
                                account?
                            </span>
                        </Link>
                    </p>
                    {error && <p className="error-text">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default LoginPage
