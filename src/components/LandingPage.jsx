// LandingPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../pictures/logo.png';
import "../styles/LandingPage.css";

function LandingPage() {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const title = "Empower Your Food Choices";
  const description = "Scan barcodes to instantly access allergen warnings, nutritional details, and personalize recommendations based on your dietary needs.";

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const typeEffect = (text, setTypedText, delay) => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          setTypedText(prev => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, delay);
      return typingInterval;
    };

    const titleInterval = typeEffect(title, setTypedTitle, 50);
    const descriptionTimeout = setTimeout(() => {
      setTypedDescription(""); 
      typeEffect(description, setTypedDescription, 20);
    }, title.length * 50 + 300);

    return () => {
      clearInterval(titleInterval);
      clearTimeout(descriptionTimeout);
    };
  }, [title, description]);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="BarcodeHealth Logo" className="logo" />
          <h1 className="title">BarcodeHealth</h1>
        </div>
        <div className="header-center">
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              Select
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <Link to="#solution">Solution</Link>
                <Link to="#serve">Who We Serve</Link>
                <Link to="#resources">Resources</Link>
                <Link to="#about">About Us</Link>
              </div>
            )}
          </div>
        </div>
        <div className="header-right">
          <button type="button" className="get-started-button">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className="section section1">
          <h2 className="title">
            <span>{typedTitle}</span>
          </h2>
          <p className="description">{typedDescription}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 BarcodeHealth. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
