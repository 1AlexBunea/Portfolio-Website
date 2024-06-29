// src/Sidebar.tsx

import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">

      <div className='rotated-items'>
        <div className='rotated-text'>
          <h1 style={{
            color:'white'
          }}>════════•</h1>
        </div>
        <button className='btn btn-outline-light'>1alexbunea@gmail.com</button>
        <div className='rotated-text-2'>
          <h1 style={{
            color:'white'
          }}>•══════════════════════</h1>
        </div>
      </div>
{/*       
      <div className='rotated-items'>
        <div className='rotated-text-2'>
          <h1>═══════════════════•</h1>
        </div>
        <button className='btn btn-outline-primary'>LinkedIn</button>
        <div className='rotated-text-2'>
          <h1>•════════</h1>
        </div>
      </div> */}

    </div>
  );
};

export default Sidebar;
