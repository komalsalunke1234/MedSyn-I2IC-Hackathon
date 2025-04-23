import React from 'react';
import nexuslogo from '../assets/nexusfinal-removebg-preview.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="nexuslogo">
        <img src={nexuslogo} className="logo-icon" alt="Logo" />
      </div>
      <nav className="nav-menu">
        <a href="#" className="headitems">
          Services and Treatment
        </a>
        <a href="#" className="headitems">
          Plan Your Visit
        </a>
      </nav>
      {/* Google Translate Element */}
      <div id="google_translate_element"></div>
    </header>
  );
}

export default Header;
