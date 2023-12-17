import React, { useState } from 'react';
import axios from 'axios';


export default function Login({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://benatural.onrender.com/api/login', {
                email,
                password,
            });

            // Handle successful login (redirect, set user state, etc.)
            console.log(response.data);
            const { userId, username: responseUsername, email: responseEmail, role: responseRole } = response.data;
            // Store userId, username, and email in localStorage (or use your preferred method of session management)
            localStorage.setItem('userId', userId);
            localStorage.setItem('username', responseUsername);
            localStorage.setItem('email', responseEmail);
            localStorage.setItem('role', responseRole);
            window.location.href = 'https://be-natural.vercel.app//home';
        } catch (error) {
            // Handle login failure (display error message, etc.)
            console.error(error.response.data.message);
            alert('Login Failed ❌')
        }
    };

    return (
        <div>
            <section className="login-section modal-overlay" style={{ zIndex: "991" }} id="login-cta">
                <form className="login-form">
                    <div className='login-heading'>
                        <h3>Login here:</h3>
                    </div>
                    <label htmlFor="email">
                        <ion-icon name="mail-outline"></ion-icon> Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">
                        <ion-icon name="key-outline"></ion-icon> Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='login-buttons'>
                        <button className="login-button" type="button" onClick={handleSignIn}>
                            Login
                        </button>
                        <button className="back-button" type="button" onClick={onClose}>
                            Back
                        </button>
                    </div>
                </form>
            </section>

            <button className="back-button" onClick={onClose}>
                <ion-icon name="arrow-back-circle-outline"> Back</ion-icon>
            </button>
        </div>
    );
}
