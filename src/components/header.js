import React, { Component } from 'react';
require('./../../styles/main.css');

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1>Recipe Board</h1>
        <div className="search-bar">
          <input placeholder="search" className="search-input" />
          <div className="search-btn">
            <img className="search-icon" src="/assets/icons/search.png" alt="search-icon" />
          </div>
        </div>
        <div className="login-btn">Login</div>
      </div>
    )
  }
}

export default Header;