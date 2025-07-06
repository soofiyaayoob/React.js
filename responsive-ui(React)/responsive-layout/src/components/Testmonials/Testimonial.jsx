import React from "react";
import "./Testimonial.css";
import ratingbox from "../../assets/ratingbox.svg";
const testimonials = [
  {
    name: "Milos Vidic",
    role: "CEO @goatmarketing",
    image: "/images/avatar1.png",
    review:
      "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate. The service provider delivered the project on time and was highly efficient and organized. Additionally, the branding and logo design were exceptional, perfectly capturing our company's identity and leaving a lasting impression on our audience.",
    rating: 5.0,
    source: "Clutch",
  },
  {
    name: "Rasesh Seth",
    role: "CEO @nextyn",
    image: "/images/avatar2.png",
    review:
      "Vasjile was extremely easy to work with. He's got a proven method and is always open to hearing you out and coming up with ways to improve. I'd definitely work with him again!",
    rating: 5.0,
    source: "upwork",
  },
  {
    name: "Goran Markovic",
    role: "Founder @vizy.io",
    image: "/images/avatar3.png",
    review:
      "Working with Handmade on our website redesign was an exceptional experience. As a CEO who needed a site that not only showcased our projects beautifully but also reflected our unique design philosophy, Handmade delivered on all fronts.",
    rating: 5.0,
    source: "Clutch",
  },
  {
    name: "Chris Hiort",
    role: "PM @ghost",
    image: "/images/avatar4.png",
    review:
      "I highly recommend Vasjile. He is a hard working guy with great ideas for big or small projects. Very flexible and very fast. Was very happy I found his profile and I’ll definitely hire him again for another project!",
    rating: 5.0,
    source: "Clutch",
  },
  {
    name: "Borgar Erlendsson",
    role: "CEO @kazmoz",
    image: "/images/avatar5.png",
    review:
      "True professional capable of delivering exceptional quality despite tight time constraints. I enjoyed receiving constructive feedback and new ideas he brought up during the design phase of my product.",
    rating: 5.0,
    source: "Clutch",
  },
  {
    name: "Jasper Zhang",
    role: "CEO @hyperbolic",
    image: "/images/avatar6.png",
    review:
      "Vasjile did an outstanding job designing our website. He’s highly skilled, fast, and a pleasure to work with. Highly recommended!",
    rating: 5.0,
    source: "Clutch",
  },
];

function TestimonialSection() {
  return (
    <div className="testimonial-section-container">
      <div className="testimonial-header">
        <div className="testimonial-badge badge">Testimonials</div>
        <h2 className="testimonial-heading">
          Read what our clients are <br /> saying about us
        </h2>
      </div>

   <div className="testimonial-scroll-container">
  <div className="testimonial-grid-wrapper">
    <div className="testimonial-grid">
      {testimonials.map((item, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-user">
            <div className="testimonial-avatar">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="testimonial-info">
              <div className="testimonial-name">{item.name}</div>
              <div className="testimonial-role">{item.role}</div>
            </div>
          </div>
          <p className="testimonial-review">{item.review}</p>
          <div className="testimonial-rating">
            <span className="rating-name">{item.source}</span>
            <span>
              {item.rating.toFixed(1)} <img src={ratingbox} alt="stars" />
            </span>
          </div>
        </div>
      ))}

    
      {testimonials.map((item, index) => (
        <div key={`copy-${index}`} className="testimonial-card">
          <div className="testimonial-user">
            <div className="testimonial-avatar">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="testimonial-info">
              <div className="testimonial-name">{item.name}</div>
              <div className="testimonial-role">{item.role}</div>
            </div>
          </div>
          <p className="testimonial-review">{item.review}</p>
          <div className="testimonial-rating">
            <span className="rating-name">{item.source}</span>
            <span>
              {item.rating.toFixed(1)} <img src={ratingbox} alt="stars" />
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

export default TestimonialSection;
