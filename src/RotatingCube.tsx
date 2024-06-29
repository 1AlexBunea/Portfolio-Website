import React from 'react';
import './RotatingCube.css'; // Assuming you have a CSS file for styling

const RotatingCube: React.FC = () => {
  return (
    <div className="cube-container" style={{
      marginTop:"7%",
      marginLeft:"5%"
    }}>
      <div className="cube">
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side right"></div>
        <div className="side left"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
      </div>
    </div>
  );
};

export default RotatingCube;