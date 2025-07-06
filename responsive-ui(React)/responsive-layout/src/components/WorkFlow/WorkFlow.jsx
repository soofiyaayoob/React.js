import React from 'react';
import './WorkFlow.css';

function WorkFlow() {
  const steps = [
    {
      number: "1",
      title: "Subscribe to a plan",
      description: "Select a plan that fits your needs and jump on a onboarding call."
    },
    {
      number: "2", 
      title: "Add a task",
      description: "Tell us what you need designed or developed and we'll get started."
    },
    {
      number: "3",
      title: "Enjoy results",
      description: "Get your project delivered in 2-3 business days on average."
    }
  ];

  return (
    <div className="works-flow-container">
      <div className="content-section">
        <div className="works-badge badge">
          <span>How it works?</span>
        </div>
        
        <h2 className="main-heading">
          Pay and get started
          the same day
        </h2>
        
        <p className="description">
          No unnecessary bureaucracy. We focus on getting your ideas and problems solved.
        </p>
      </div>
      
      <div className="works-container">
        {steps.map((step, index) => (
          <div key={index} className="work-card">
            <div className="work-number">
              <span>{step.number}</span>
            </div>
            <h3 className="work-title">{step.title}</h3>
            <p className="work-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkFlow;
