// Component.js

import React from 'react';
import './component.css'; // Optional: for styling

const Component = ({ image, description, onClick }) => {
  const handleClick = () => {
    onClick(); // Call the parent component's onClick handler
  };

  return (
    <div className="component-item" onClick={handleClick} style={{}}>
      <img src={image} alt="Component" className="component-image"/>
      <div className="component-description" style={{
        width:200,
        height: 100,
      }}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Component;