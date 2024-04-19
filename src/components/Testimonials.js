import React from 'react';
import './Testimonials.css'; // Import CSS file for styling
import men from '../images/men.png'; // Import image (replace with your actual image import)

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="image-container">
        {/* Replace 'image-placeholder' with the actual image */}
        <img src={men} alt="Testimonial" className="testimonial-image" />
      </div>
      <div className="testimonials-text">
        <div className="testimonials-header">
          <h2>Testimonials</h2>
          <h4>What Our Customers Say about the taste......ummmmmmmmm!</h4>
        </div>
        <div className="testimonial">
          <p className="quote">"The dining experience at your restaurant was exceptional! The food was absolutely delicious and exceeded our expectations. The flavors were rich and authentic. We'll definitely be returning soon!"</p>
          <p className="name">- Elon Musk</p>
        </div>
        <div className="testimonial">
          <p className="quote">"I wanted to reach out and express my gratitude for the amazing meal we had at your establishment. The food was phenomenal—fresh, flavorful, and beautifully presented."</p>
          <p className="name">- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
