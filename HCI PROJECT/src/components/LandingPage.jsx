// Landingfirst.jsx
import React, { useState } from 'react';
import "../styles/LandingPage.css";
import foodImage from '../assets/empower.jfif'; 
import logo from '../assets/mainLogo.png';
import know from '../assets/know.png';
import barcode from '../assets/barcode.png';
import diet from '../assets/dietary.png';
import tips from '../assets/tips.png';
import search from '../assets/search.png';
import spoonfork from '../assets/spoonfork.png';
import barcode2 from '../assets/barcode2.png';
import howScan from '../assets/how-scan-image.jpg';
import yt from '../assets/yt.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import ig from '../assets/ig.png';

function TeamMember({ image, name, role }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  return (
    <div
      className="team-member"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className="team-image" />
      {isHovered && (
        <div className="name-overlay">
          <h2>{name}</h2>
          <h4>{role}</h4>
        </div>
      )}
    </div>
  );
}

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h6>Barcode Health</h6>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#who-we-serve">Who We Serve</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
      
      <div className="food-choices-container">
        <div className="text-overlay">
            <h1>
            Empower<br/>
            Your Food<br/>
            Choices
            </h1>
          <p>
            Scan barcodes to instantly access<br/>
            allergen warnings, nutritional details,<br/>
            and personalize recommendations<br/>
            based on your dietary needs.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="image-section">
          <img src={foodImage} alt="Empower your food choices" />
        </div>
      </div>

      <div className="know-your-food-container">
        <div className="know-your-food-image">
          <img src={know} alt="Know-your-food"></img>
        </div>
        <div className="know-your-food-text">
          <h1>How to <br/>
          <span>Know your <br/>food?</span></h1>
          <p>
            BarcodeHealth helps users make smarter food choices by scanning barcodes to instantly reveal 
            nutritional details. It detects allergens, provides ingredient transparency, and offers 
            personalized insights based on your dietary profile—making it easy 
            to find foods that fit your lifestyle and health goals.
          </p>
        </div>
      </div> 

      <div className="scan-smarter-container">
        <div className="scan-smarter-text">
          <h2>Scan smarter with BarcodeHealth</h2>
        </div>
        <div>
          <ul className="form-info">
            <li>
              <div className="form1">
                <img src={barcode} alt="Barcode" />
                <h3>Barcode</h3>
                <p>Real-time scanning of product barcodes to retrieve 
                  detailed nutritional and allergen information.
                </p>
              </div>
            </li>
            <li>
              <div className="form2">
                <img src={diet} alt="Barcode" />
                <h3>Dietary Profile</h3>
                <p>Customize your dietary needs and restrictions for personalized 
                  product recommendations and allergen alerts.
                </p>
              </div>
            </li>
            <li>
              <div className="form3">
                <img src={tips} alt="Barcode" />
                <h3>Healthy Shopping Tips</h3>
                <p>Essential Tips for Navigating Food Allergies and 
                  Making Healthy Choices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="how-scan-container">
        <div className="how-scan-text">
          <h2>How the Scanner works</h2>
          <div>
            <ul className="how-scan-info">
              <li>
                <div className="how-scan-info1">
                  <div>
                    <img src={barcode2} alt="barcode-icon" />
                  </div>
                  <div>
                    <h3>Barcode Scanning</h3>
                    <p>The app scans barcodes to retrieve nutritional info, ingredients, and allergen alerts.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="how-scan-info2">
                  <img src={spoonfork} alt="nutrition-icon" />
                  <h3>Nutritional Breakdown</h3>
                  <p>provides nutritional details after a barcode scan to aid dietary choices.</p>
                </div>
              </li>
              <li>
                <div className="how-scan-info3">
                  <img src={search} alt="search-icon" />
                  <h3>Allergen Detection</h3>
                  <p> alerts users to allergens by identifying harmful ingredients based on dietary restrictions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="how-scan-image">
          <img src={howScan} alt="image" />
        </div>
      </div>


      <div className="other-container">
        <ul className="infos">
          <li>
            <h4>Solutions</h4>
            <h6>Product Barcode</h6>
            <h6>Scanning</h6>
            <h6>Allergen Detection</h6>
            <h6>Nutritional Insights</h6>
            <h6>Personalized Dietary Profiles</h6>
          </li>
          <li>
            <h4>Who We Serve</h4>
            <h6>Health-Conscious Shoppers</h6>
            <h6>Individuals with Allergies</h6>
            <h6>Fitness Enthusiasts</h6>
            <h6>Nutritionists & Dietitians</h6>
            <h6>Families & Parents</h6>
          </li>
          <li>
            <h4>Resources</h4>
            <h6>FAQs</h6>
            <h6>Blog & Healthy Tips</h6>
            <h6>User Guide</h6>
            <h6>API Documentation</h6>
            <h6>Customer Support</h6>
          </li>
          <li>
            <h4>About Us</h4>
            <h6>Our Story</h6>
            <h6>Mission & Vision</h6>
            <h6>Team</h6>
            <h6>Careers</h6>
            <h6>Contact Information</h6>
          </li>
        </ul>
      </div>

      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="logo"/>
          <h6>Barcode Health</h6>
        </div>
        <div className="all-rights-reserved">
          <p>All Rights Reserved, Company Privacy</p>
          <p className="policy">POLICY | TERMS</p>
        </div>
        <div className="app-logos">
          <img src={fb} alt="facebook-logo" />
          <img src={twitter} alt="twitter-logo" />
          <img src={yt} alt="youtube-logo" />
          <img src={ig} alt="instagram-logo" />
        </div>
      </div>
    </div>
  ); 
} 

export default LandingPage;
