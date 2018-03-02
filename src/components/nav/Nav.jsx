import React from 'react';
import './Nav.css';
import NavLogo from '../../img/footer-logo.png';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <img class="nav-logo" src={NavLogo} alt="logo" />
        <p>Destinations</p>
        <p>Trips</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    )
  };
}

export default Nav;
