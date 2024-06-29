// src/Sidebar.tsx

import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar" style={{
        marginTop:20,
    }}>
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
