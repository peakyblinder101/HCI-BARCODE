import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';

const Login = ({ onSwitch, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed! Check your email and password.');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Store token if needed
      onLoginSuccess(); // Call the success function
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='container-log'>
      <div className="login-container">
        <h2>Log In</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error messages */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input 
                type={passwordVisible ? 'text' : 'password'} 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <button type="submit">Log In</button>
        </form>
        <p onClick={onSwitch} className="switch">
          Don't have an account? <span className="link">Sign Up</span>
        </p>
      </div>
    </div>  
  );
};

export default Login;
