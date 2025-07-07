import React from 'react';
import './FAQ.css';

const faqs = [
  "Is it really unlimited?",
  "Why wouldn’t I just hire a freelancer?",
  "Why wouldn’t I just hire a full-time designer?",
  "Can I pause, renew or cancel at any time?",
  "Are there any contracts?",
  "How do we communicate?",
  "What if I only have one design task?",
  "What is an active task?",
  "Who are the designers?",
  "How many designs can be done in a single month?",
  "Are there any refunds if I don’t like the designs?"
];

function FAQ() {
  return (
    <div className="faq-section-container " id="faq">
      <div className="faq-header">
        <div className="faq-badge badge">Insights</div>
        <h2 className="faq-heading">Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <span className="faq-text">{question}</span>
             <span className='icon'>+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
