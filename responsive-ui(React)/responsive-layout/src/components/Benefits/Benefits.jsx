import React from 'react';
import './Benefits.css';
import Image1 from '../../assets/Benefits1.svg';
import Image2 from '../../assets/Benefits2.svg';
import Image3 from '../../assets/Benefits3.svg';
import Image4 from '../../assets/Benefits4.svg';
import Image5 from '../../assets/Benefits5.svg';
import Image6 from '../../assets/Benefits6.svg';
function Benefits() {
  const benefits = [
    {
      title: "Fast turnaround",
      description: "Expect the first draft within 48-72 hours, from Monday to Saturday.",
      image: Image1
    },
    {
      title: "Unlimited requests",
      description: "Enjoy bespoke of unlimited designs, tailored to meet your every need.",
      image: Image2
    },
    {
      title: "Always in sync",
      description: "Stay in sync with real-time updates and seamless communication, all via Slack.",
      image: Image3
    },
    {
      title: "Pause or cancel anytime",
      description: "Flexibility at your fingertips - pause or cancel your subscription anytime.",
      image: Image4
    },
    {
      title: "Trello task management",
      description: "Experience in crafting designs that not only captivate but also drive results.",
      image: Image5
    },
    {
      title: "Worry free pricing",
      description: "Get all your design needs covered for just $150/month.",
      image: Image6
    }
  ];

  return (
    <div className="benefits-section-container" id="benefits">
   
      <div className="benefits-header">
        <div className="benefits-badge-container">
          <span className="benefits-badge badge">Benefits</span>
        </div>
        <h2 className="benefits-heading">
          Unlock a world of design<br />
          potential with us
        </h2>
      </div>

      
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
