import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <button className="header-button" type="button" aria-label="Go back" title="Go back">
        <img src={`${process.env.PUBLIC_URL}back-arrow.png`}></img>
      </button>
      <h1>Stations</h1>
      <button className="header-button" type="button" aria-label="Stop playing" title="Stop playing">
        <img src={`${process.env.PUBLIC_URL}switch.png`}></img>
      </button>
    </header>
  );
}

export default Header;
