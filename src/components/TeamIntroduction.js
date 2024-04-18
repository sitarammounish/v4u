import React from 'react';
import AvatarCircle from './AvatarCircle'; // Assuming you have an AvatarCircle component

const StoreContainer = () => {
  return (
    <div className="store-container">
      <h2 className="store-heading">Our Store</h2>
      <div className="store-content">
        <div className="text-column">
          <p>
            Welcome to our store! We offer a wide range of products to meet your needs.
            Feel free to explore our collection and find the perfect items for you.
          </p>
        </div>
        <div className="avatar-column">
          <AvatarCircle />
        </div>
      </div>
    </div>
  );
};

export default StoreContainer;
// 