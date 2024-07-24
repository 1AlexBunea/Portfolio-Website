import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  displayPage: (page: number) => void;
}

const Header: React.FC<HeaderProps> = ({ displayPage }) => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <button className='header-button' onClick={() => displayPage(3)}>Home</button>   
        <button className="header-button" onClick={() => displayPage(0)}>About</button>
        <button className="header-button" onClick={() => displayPage(1)}>Experience</button>
        <button className="header-button" onClick={() => displayPage(2)}>Projects</button>
        <button className="menu-button" onClick={toggleOffCanvas}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        </button>
      </div>
      {isOffCanvasOpen && (
        <>
          <div className="overlay" onClick={toggleOffCanvas}></div>
          <div className="off-canvas slide-in-right">
            <button className='close-button' onClick={toggleOffCanvas}>Close</button>
            <div>
              <button className='header-button' onClick={() => displayPage(3)}>Home</button>   
              <button className="header-button" onClick={() => displayPage(0)}>About</button>
              <button className="header-button" onClick={() => displayPage(1)}>Experience</button>
              <button className="header-button" onClick={() => displayPage(2)}>Projects</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
