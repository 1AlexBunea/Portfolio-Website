// src/Sidebar.tsx

import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar" style={{
        marginTop:20,
    }}>
      <div className='rotated-items'>
        <div className='rotated-text'>
          <h1>___</h1>
        </div>
        <button className='btn btn-outline-dark'>1alexbunea@gmail.com</button>
        <div className='rotated-text'>
          <h1>__________________________________________________</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
