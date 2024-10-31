//WelcomaPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/WelcomePage.css";
import logo from '../pictures/logo.png';
import yourImage from '../pictures/knowfood.jpg'; 
import barcodeImg from '../pictures/barcode.jpg';
import proImg from '../pictures/Pro.jpg';
import shopTipsImg from '../pictures/shoptips.jpg';
import scannerWorksImage from '../pictures/scannerworks.jpg';
import barcodeScanningImage from '../pictures/iconscan.jpg';
import nutritionalBreakdownImage from '../pictures/nutritionalicon.jpg';
import allergenDetectionImage from '../pictures/magnifyingicon.jpg';
import ricaImg from '../pictures/rica.jpg'; // Add this import
import umparImg from '../pictures/umpar.jpg'; // Add this import

function WelcomePage() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const title = "Empower Your Food Choices";
  const description = "Scan barcodes to instantly access allergen warnings, nutritional details, and personalize recommendations based on your dietary needs.";

  const handleGetStartedClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/LoginSignup");
    }, 300); // Match this duration to your CSS transition duration
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const typeEffect = (text, setTypedText, delay) => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          const charToAdd = text.charAt(index);
          console.log(`Adding: ${charToAdd}`); // Log the character being added
          setTypedText(prevTypedText => prevTypedText + charToAdd); // Use functional update
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, delay);
    
      return typingInterval;
    };

    // Start typing the title
    const titleInterval = typeEffect(title, setTypedTitle, 50); // Typing speed for title
  
    // Start typing the description after the title finishes
    const descriptionTimeout = setTimeout(() => {
      setTypedDescription(""); // Clear the previous text
      typeEffect(description, setTypedDescription, 20); // Typing speed for description
    }, title.length * 100 + 300); // Start after title finishes
  
    return () => {
      clearInterval(titleInterval);
      clearTimeout(descriptionTimeout);
    };
  }, [title, description]);

  return (
    <div className={`welcome-page ${isTransitioning ? 'fade-out' : ''}`}>
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
          <button type="button" className="get-started-button" onClick={handleGetStartedClick}>
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
          <p className="description">
            {typedDescription}
          </p>
        </div>

        {/* Additional Sections */}
        <div className="section section2">
        <div className="section-content">
            <img src={yourImage} alt="Description" className="section-image" />
            <div className="section-text">
                <h2>How to Know <br/>
                   Your Food?</h2>
                <p>
                    BarcodeHealth helps users make smarter food choices by scanning 
                    barcodes to instantly reveal nutritional details. It detects allergens, 
                    provides ingredient transparency, and offers personalized insights 
                    based on your dietary profile making it easy to find foods that 
                    fit your lifestyle and health goals.
                </p>
                </div>
            </div>
        </div>

        <div className="section section3">
        <h2 className="section3-title">Scan smarter with BarcodeHealth</h2>
        <div className="card-container">
            <div className="card">
                <img src={barcodeImg} alt="Card Image 1" className="card-image" />
                <h3>Barcode</h3>
                <p>
                  Real-time scanning of product barcodes to 
                  retrieve detailed nutritional and allergen 
                  information.
                </p>
            </div>
            <div className="card">
                <img src={proImg} alt="Card Image 2" className="card-image" />
                <h3>Dietary Profile</h3>
                <p>
                  Customize your dietary needs and restrictions 
                  for personalized product recommendations and 
                  allergen alerts.
                </p>
            </div>
            <div className="card">
                <img src={shopTipsImg} alt="Card Image 3" className="card-image" />
                <h3>Healthy Shopping Tips</h3>
                <p>
                  Essential Tips for Navigating Food Allergies 
                  and Making Healthy Choices.
                </p>
              </div>
            </div>
        </div>

        <div className="section section4">
        <div className="section4-content">
            <div className="section4-text">
                <h2>How the Scanner Works</h2>
                <div className="card-container-section4">
                    <div className="card-section4">
                        <img src={barcodeScanningImage} alt="Barcode Scanning" className="card-image-4" />
                        <h3>Barcode<br/> 
                          Scanning</h3>
                        <p>The app scans barcodes to retrieve nutritional info, ingredients, and allergen alerts.</p>
                    </div>
                    <div className="card-section4">
                        <img src={nutritionalBreakdownImage} alt="Nutritional Breakdown" className="card-image-4" />
                        <h3>Nutritional<br /> 
                          Breakdown</h3>
                        <p>Provides nutritional details after a barcode scan to aid dietary choices.</p>
                    </div>
                    <div className="card-section4">
                        <img src={allergenDetectionImage} alt="Allergen Detection" className="card-image-4" />
                        <h3>Allergen<br /> 
                          Detection</h3>
                        <p>Alerts users to allergens by identifying harmful ingredients based on dietary restrictions.</p>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={scannerWorksImage} alt="Large Representation" className="section4-large-image" />
            </div>
        </div>
    </div>

    <div className="section section5">
    <h2 className="section5-title">Our Team</h2>
    <div className="card-container-section5">
      <div className="card-section5">
        <img src={ricaImg} alt="Feature 1" className="card-image" />
        <h3>Immanuel Ray Dingal</h3>
        <p>Backend</p>
      </div>
      <div className="card-section5">
        <img src={ricaImg} alt="Feature 2" className="card-image" />
        <h3>Mark Daniel T. Fernandez</h3>
        <p>Frontend</p>
      </div>
      <div className="card-section5">
        <img src={umparImg} alt="Feature 3" className="card-image" />
        <h3>Norhanah M. Umpar</h3>
        <p>Leader</p>
      </div>
      <div className="card-section5">
        <img src={ricaImg} alt="Feature 4" className="card-image" />
        <h3>Rica Jane S. Navares</h3>
        <p>UI/UX</p>
      </div>
      <div className="card-section5">
        <img src={ricaImg} alt="Feature 5" className="card-image" />
        <h3>Rey Nagasaki</h3>
        <p>Backend</p>
      </div>
    </div>
  </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 BarcodeHealth. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WelcomePage;
