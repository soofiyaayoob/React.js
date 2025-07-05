import React from 'react';
import './Navbar.css'; // Import the CSS
import arrowIcon from "../../assets/arrowIcon.svg"; // ✅ fixed path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Benefits</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>

      <button className="demo-button">
        Book a demo
        <img src={arrowIcon} alt="Arrow Icon" className="demo-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
