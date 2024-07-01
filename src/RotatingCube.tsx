import React from 'react';
import './RotatingCube.css'; // Assuming you have a CSS file for styling

const RotatingCube: React.FC = () => {
  return (
    <div className="cube-container" style={{
      marginTop:"15%",
      marginLeft:"5%"
    }}>
      <div className="cube">
        <div className="side front" style={{textAlign:'center'}}>
          <img src='nodejs.png' style={{height:100, width:100}}></img>

        </div>
        <div className="side back" style={{textAlign:'center'}}>
          <img src='react.png' style={{height:100, width:100}}></img>
        </div>
        
        <div className="side right" style={{textAlign:'center'}}>
          <img src='python.png' style={{height:200, width:200}}></img>
        </div>
        <div className="side left" style={{textAlign:'center'}}>
          <img src='java.png' style={{height:100, width:100}}></img>
        </div>
        <div className="side top" style={{textAlign:'center'}}>
          <img src='pandas.png' style={{height:100, width:100}}></img>
        </div>
        <div className="side bottom" style={{textAlign:'center'}}>
          <img src='git.png' style={{height:100, width:100}}></img>
        </div>
        
      </div>
    </div>
  );
};

export default RotatingCube;