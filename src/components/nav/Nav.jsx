import React from 'react';
import './Nav.css';
import NavLogo from '../../img/footer-logo.png';


class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar transparent">
        <img className="nav-logo" src={NavLogo} alt="logo" />
        <div className="links">
          <span>Destinations</span>
          <span>Trips</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    )
  };
}

export default Nav;
