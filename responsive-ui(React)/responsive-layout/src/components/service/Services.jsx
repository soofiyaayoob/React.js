import React from 'react';
import './Services.css';

const services1 = [
  "UI/UX Design", "Logo Design", "Graphic Design", "Animation", "Branding"
];

const services2 = [
  "UI/UX Design", "Logo Design", "Graphic Design", "Animation", "Branding"
];

function Services() {
  return (
    <div className="services-wrapper">
      
      <div className="services-header">
        <div className="services-badge badge">Services</div>
        <h2 className="services-heading">All you want,<br />delivered on time</h2>
      </div>

      <div className="scroll-track-container">
  <div className="scroll-track first">
    {[...services1, ...services1].map((item, index) => (
      <div key={index} className="service-tag">{item}</div>
    ))}
  </div>
</div>

<div className="scroll-track-container reverse">
  <div className="scroll-track second">
    {[...services2, ...services2].map((item, index) => (
      <div key={index} className="service-tag">{item}</div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Services;
