import React from "react";
import "./About.css";
import leftLeaf from "../../assets/left-leaf.svg";
import rightLeaf from "../../assets/right-leaf.svg";

function About() {
  return (
    <section className="about-wrapper">
      {/* TOP BLOCK */}
      <div className="about-top">
        <div className="about-video-placeholder">
          <video width="320" height="240" controls className="video-player">
            <source src="/videos/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="about-testimonial-box">
          <img src={leftLeaf} alt="left leaf" className="leaf-icon" />
          <div className="testimonial-content">
            <p className="testimonial-text">
              An absolute professional who consistently delivers exceptional work, even under the most demanding deadlines. I appreciated the insightful feedback and innovative ideas introduced throughout the design process, which greatly enhanced the final product.
            </p>
            <p className="testimonial-author">Wade Warren, Founder @Lorem ipsum</p>
          </div>
          <img src={rightLeaf} alt="right leaf" className="leaf-icon" />
        </div>
      </div>

      {/* BOTTOM BLOCK */}
      <div className="about-bottom">
        <div className="about-title">
          Your dedicated<br />in-house design<br />team
        </div>

        <div className="about-description">
          <p>
            We are a global collective of diverse designers and developers, partnering with brands of all scales. What distinguishes us is our dedication to crafting memorable, user-friendly, and captivating experiences — it's what we excel at. The projects we deliver combine creative vision with practical execution, resulting in solutions that are both distinctive and impactful.
          </p>

          <div className="bottom-info">
            <div className="author-box">
              <p className="author-name">Lorem Ipsum</p>
              <p className="author-title">Founder and CEO</p>
            </div>
            <img src={rightLeaf} alt="right leaf" className="right-leaf" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
