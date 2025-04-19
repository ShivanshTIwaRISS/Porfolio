import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Welcome to Shivansh Tiwari's Portfolio</h1>
        <p className="header-subtitle">Aspiring Full Stack Developer | Projects | Code</p>
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;
