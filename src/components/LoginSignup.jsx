// src/components/LoginSignup.js
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Login from './Login';
import Signup from './Signup';
import '../styles/LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState('right');

  const handleSwitch = () => {
    setSwipeDirection(isSignup ? 'right' : 'left');
    setIsSignup(!isSignup);
  };

  const handleSignupSuccess = () => {
    setSwipeDirection('left');
    setIsSignup(false); // Switch to login
  };

  return (
    <div className="container">
      <CSSTransition
        in={!isSignup}
        timeout={300}
        classNames={{
          enter: 'slide-enter',
          enterActive: 'slide-enter-active',
          exit: swipeDirection === 'left' ? 'slide-exit' : 'slide-exit-active-right',
          exitActive: swipeDirection === 'left' ? 'slide-exit-active' : 'slide-exit-active-right'
        }}
        unmountOnExit
      >
        <div className="form">
          <Login onSwitch={handleSwitch} />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSignup}
        timeout={300}
        classNames={{
          enter: 'slide-enter',
          enterActive: 'slide-enter-active',
          exit: swipeDirection === 'left' ? 'slide-exit' : 'slide-exit-active-right',
          exitActive: swipeDirection === 'left' ? 'slide-exit-active' : 'slide-exit-active-right'
        }}
        unmountOnExit
      >
        <div className="form">
          <Signup onSignupSuccess={handleSignupSuccess} onSwitch={handleSwitch} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default LoginSignup;
