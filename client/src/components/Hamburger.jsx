import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = {
  nav_icon1: require("../Images/Icon-fb.png"),
  nav_icon2: require("../Images/Icon-g+.png"),
  nav_icon3: require("../Images/Icon-w.png"),
  nav_icon4: require("../Images/Icon-yt.png"),
  hamburger: require("../Images/Hamburger_icon.svg.png"),
}

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStyleChanged, setIsStyleChanged] = useState(false);

  const divStyle = {
    backgroundColor: isStyleChanged ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
  };
  const togglerStyle = {
    filter: isStyleChanged ? 'invert(0%)' : 'invert(100%)',
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setIsStyleChanged(!isStyleChanged);
  };

  const [loggedInUsername, setLoggedInUsername] = useState(
    localStorage.getItem('loggedInUsername') || 'LOGIN'
  );
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem('isLogged') === 'true'
  );
  const [isUserRegistered, setIsUserRegistered] = useState(
    localStorage.getItem('isUserRegistered') === 'true'
  );

  return (
    <div className='hamburger' style={divStyle}>
      <button style={togglerStyle} className="navbar-toggler" type="button" onClick={handleMenuClick}>
        {/* <div className="navbar-toggler-icon"></div> */}
        <img src={images.hamburger} />
      </button>
      {isOpen && (
        <div className="menu">
          <ul className="ham-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/destinations" >DESTINATIONS</Link></li>
            <li><Link to="/motorcycles" >MOTORCYCLES</Link></li>
            <li><Link to="/rentals" >RENTALS</Link></li>
            <li><Link to="/contact" >CONTACT</Link></li>
            <li><Link to="/loginandsignup" >{isUserRegistered ? loggedInUsername : 'LOGIN'}</Link></li>
            <li>
              <ul className="nav-icons">
                <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon1} alt="" /></Link></li>
                <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon2} alt="" /></Link></li>
                <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon3} alt="" /></Link></li>
                <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon4} alt="" /></Link></li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;