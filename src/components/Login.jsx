// Login.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/LoginSignup.css';

const Login = ({ onSwitch }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input 
              type={passwordVisible ? 'text' : 'password'} 
              id="password" 
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
  );
};

export default Login;
