import React from 'react';
import './Footer.css';

import arrowIcon from '../../assets/ArrowIconBlack.svg';
import link1 from '../../assets/Link.svg';
import link2 from '../../assets/Link1.svg';
import link3 from '../../assets/Link2.svg';
import link4 from '../../assets/Link3.svg';
import link5 from '../../assets/Link4.svg'; 

function Footer() {
  return (
    <footer className="contact-section-container">
      <div className="contact-content-wrapper">
        <div className="contact-message">
          <h2 className="contact-heading">
            Need more clarity?
            <br />
            Get in touch!
          </h2>
          <button className="contact-button">
            Book a demo
            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
          </button>
        </div>

        <div className="contact-footer">
          <span className="footer-text">© 2024 All Rights Reserved</span>
          <div className="footer-icons">
            <img src={link1} alt="Link 1" />
            <img src={link2} alt="Link 2" />
            <img src={link3} alt="Link 3" />
            <img src={link4} alt="Link 4" />
            <img src={link5} alt="Link 5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
