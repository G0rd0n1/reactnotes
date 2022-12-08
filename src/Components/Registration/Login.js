import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/notes')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };


    return (
        <div className='cover'>
          <form onSubmit={handleSubmit}>
                <h1 className="heading">Login</h1>
                
                <input 
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                 />

                <button className='Button' type="submit"> Login </button>
                {error && <span>Wrong email or password!</span>}
                </form>
        </div>
    )
}

export default Login;