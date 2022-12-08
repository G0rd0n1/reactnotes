import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import "./Register.css";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      console.log("Account created successfully");
      navigate('/notes');
    } catch (e) {
      console.log(e.message);
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

          <button className='Button' type="submit"> Sign in </button>
        </form>
    </div>
  )
}

export default Register;