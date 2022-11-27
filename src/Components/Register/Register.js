import React from 'react';
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className='cover'>
            <h1>Login</h1>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />

            <div className='login-btn'>Login</div>
            <p className='text'> forgot password?</p>
        </div>
    )
}

export default LoginForm;