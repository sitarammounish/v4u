// import React from 'react';
// import './Testimonials.css'; // Import CSS file for styling
// import men from '../images/men.png'

// const Testimonials = () => {
//   return (
//     <div className="testimonials-container">
//       <div className="image-container">
     
//         <img src={men} alt="Testimonial" className="testimonial-image" />
//       </div>
//       <div className="testimonials-text">
//       <div className="testimonials-header">
//         <h2>Testimonials</h2>
//         <h4>What Our Customers Say...</h4>
//       </div>
//         <div className="testimonial">
//           <p className="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
//           <p className="name">- John Doe</p>
//         </div>
//         <div className="testimonial">
//           <p className="quote">"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."</p>
//           <p className="name">- Jane Smith</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

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
          <p className="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          <p className="name">- John Doe</p>
        </div>
        <div className="testimonial">
          <p className="quote">"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."</p>
          <p className="name">- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
