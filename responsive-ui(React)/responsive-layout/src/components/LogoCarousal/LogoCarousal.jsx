import React from "react";
import "./LogoCarousel.css";
import dribbble from "../../assets/dribbble.svg";
import awwwards from "../../assets/awwwards.svg";
import behance from "../../assets/behance.svg";
import cssDesign from "../../assets/cssdesign.svg";

function LogoCarousel() {
  return (
    <section className="seen-on-section">
      <p className="seen-title">As seen and loved on:</p>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          <img src={dribbble} alt="Dribbble" />
          <img src={awwwards} alt="Awwwards" />
          <img src={behance} alt="Behance" />
          <img src={cssDesign} alt="CSS Design Awards" />

          <img src={dribbble} alt="Dribbble" />
          <img src={awwwards} alt="Awwwards" />
          <img src={behance} alt="Behance" />
          <img src={cssDesign} alt="CSS Design Awards" />
        </div>
      </div>
      <div className="Horizondal-divider"></div>
    </section>
  );
}

export default LogoCarousel;
