// src/Sidebar.tsx

import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const checkSidebarVisibility = () => {
    setIsVisible(window.innerWidth >= 600);
  };

  useEffect(() => {
    checkSidebarVisibility();
    window.addEventListener('resize', checkSidebarVisibility);
    return () => {
      window.removeEventListener('resize', checkSidebarVisibility);
    };
  }, []);

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='rotated-items'>
        <div className='rotated-text'>
          <h1 style={{ color:'white' }}>════════•</h1>
        </div>
        <button className='btn btn-outline-light' onClick={() => window.location.href = "mailto:1alexbunea@gmail.com?subject=Subject%20Here&body=Body%20content%20here"}>
          1alexbunea@gmail.com
        </button>
        <div className='rotated-text-2'>
          <h1 style={{ color:'white' }}>•══════════════════════</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
