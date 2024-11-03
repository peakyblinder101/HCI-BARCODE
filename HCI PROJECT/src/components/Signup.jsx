import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Signup.css';

const Signup = ({ onSignupSuccess, onSwitch }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [allergies, setAllergies] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const validateFields = () => {
    let errors = {};
    
    if (!username) errors.username = "Username is required.";
    if (!firstName) errors.firstName = "First Name is required.";
    if (!lastName) errors.lastName = "Last Name is required.";
    if (!gender) errors.gender = "Please select your gender.";
    
    if (!email) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
      }
    }

    if (!password) errors.password = "Password is required.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
    
    const trimmedAllergies = allergies.split(',').map(a => a.trim());
    if (trimmedAllergies.length === 0 || trimmedAllergies.every(a => a === '')) {
      errors.allergies = "Allergies cannot be empty.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFields();
    setErrorMessages(errors);

    if (Object.values(errors).every((msg) => msg === '')) {
      setErrorMessage('');
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            firstName,
            lastName,
            gender,
            email,
            password,
            allergies,
          }),
        });

        if (!response.ok) {
          throw new Error('Signup failed! Please try again.');
        }

        onSignupSuccess(); // Call success handler
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className='container-sig'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errorMessages.username && <div className="error-message">{errorMessages.username}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select 
                id="gender" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errorMessages.gender && <div className="error-message">{errorMessages.gender}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errorMessages.firstName && <div className="error-message">{errorMessages.firstName}</div>}
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
              {errorMessages.password && <div className="error-message">{errorMessages.password}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errorMessages.lastName && <div className="error-message">{errorMessages.lastName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <div className="password-container">
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span onClick={toggleConfirmPasswordVisibility}>
                  {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errorMessages.confirmPassword && <div className="error-message">{errorMessages.confirmPassword}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="middleName">Middle Name (Optional):</label>
              <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="allergies">Allergies (comma separated):</label>
              <input
                type="text"
                id="allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
              {errorMessages.allergies && <div className="error-message">{errorMessages.allergies}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorMessages.email && <div className="error-message">{errorMessages.email}</div>}
            </div>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <p onClick={onSwitch} className="switch">
          Already have an account? <span className="link">Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
