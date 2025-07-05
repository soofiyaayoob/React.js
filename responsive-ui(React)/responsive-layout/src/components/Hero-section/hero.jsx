import React from "react";
import "./Hero.css";
import connectus from "../../assets/connectus.svg";
import ratingbox from "../../assets/ratingbox.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="rating-box">
        <span className="rating-value">5.0</span>
        <img src={ratingbox} alt="stars" />
        <span className="reviews">11 reviews</span>
      </div>

      <h1 className="heading">
        Partner with a Full-Service <br /> Design Team for All Your <br /> Creative Needs
      </h1>

      <p className="subtext">
        Skip the hassle of finding the perfect full-time designer or studio
      </p>

      <button className="connect-button">
        Connect us
        <img src={connectus} alt="arrow" className="connect-icon" />
      </button>
    </section>
  );
}

export default Hero;
