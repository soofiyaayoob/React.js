import React from 'react';
import './portfolio.css';
import project5 from '../../assets/project5.svg'; 
import project1 from '../../assets/project1.svg'; 
import project2 from '../../assets/project2.svg'; 
import project3 from '../../assets/project3.svg'; 
import project4 from '../../assets/project4.svg'; 
import project6 from '../../assets/project6.svg'; 
function Portfolio() {
  const portfolioItems = [
    {
      title: "Slipery moneys - ecommerce platform for high risk industries",
      image: project1
    },
    {
      title: "Hybrid capital - digital currency",
      image: project2
    },
    {
      title: "Betero - sports betting platform",
      image: project3
    },
    {
      title: "Exec - employees financial wellness saas",
      image: project4
    },
    {
      title: "Voltoge - accessible clean energy startup",
      image: project5 
    },
    {
      title: "Hyperbolic - a decentralized data transmission startup",
      image: project6
    }
  ];

  return (
    <div className="portfolio-section-container">
      
      <div className="portfolio-header">
        <div className="header-content">
          <div className="badge-container">
            <span className="portfolio-badge">Portfolio</span>
          </div>
          <h2 className="portfolio-heading">
            Exceptional work<br />
            you deserve
          </h2>
        </div>
        <div className="header-description">
          <p>
            From tech startups to healthcare giants, e-commerce pioneers to edtech,
            we've left our mark on diverse domains
          </p>
        </div>
      </div>

 
      <div className="portfolio-content">
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        
        <div className="see-all-container">
          <button className="see-all-button">
            <span>See all works</span>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M3.33333 8.5H12.6667M12.6667 8.5L8 3.83333M12.6667 8.5L8 13.1667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
