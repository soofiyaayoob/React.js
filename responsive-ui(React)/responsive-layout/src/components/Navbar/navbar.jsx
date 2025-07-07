import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import arrowIcon from "../../assets/ArrowIconYellow.svg";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <ul className="nav-links desktop-only">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#benefits">Benefits</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>

      <button className="demo-button desktop-only">
        Book a demo
        <img src={arrowIcon} alt="Arrow Icon" className="demo-icon" />
      </button>

      <button
        className="hamburger mobile-only"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu />
      </button>

      <div ref={sidebarRef} className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsOpen(false)}>
          <GiHamburgerMenu />
        </button>

        <ul className="sidebar-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <button className="demo-button-sidebar">
              Book a demo
              <img src={arrowIcon} alt="Arrow Icon" className="demo-icon" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
