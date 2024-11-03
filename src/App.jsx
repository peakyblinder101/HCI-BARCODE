import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import './styles/LandingPage.css';
import './styles/Login.css';
import './styles/Signup.css';
import './styles/HomePage.css';

function App() {
    const navigate = useNavigate();

    const handleSwitchToLogin = () => navigate('/login');
    const handleSwitchToSignup = () => navigate('/signup');

    // Define the handleLoginSuccess function
    const handleLoginSuccess = () => {
        navigate('/home');
    };

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login onSwitch={handleSwitchToSignup} onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/signup" element={<Signup onSignupSuccess={handleSwitchToLogin} onSwitch={handleSwitchToLogin} />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
