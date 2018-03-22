import React from 'react';
import './Landing.css';
import Nav from '../nav/Nav';
import SplashImg from '../../img/splash.jpg';
import MainSplashLogo from '../../img/main-splash-logo.png';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-wrapper">
        <Nav />
        <div className="splash">
          <img className="splash-img" src={SplashImg} />
          <img className="main-splash-logo" src={MainSplashLogo} />
          <button type='btn' className="explore-button">Explore</button>
        </div>
      </div>
    )
  };
}

export default Landing;


// <Hero />
// <Intro />
// <Activities />
// <Maps />
// <Footer />
