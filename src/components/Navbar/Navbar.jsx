import React from "react";
import logo1 from "../../assets/logo1.png";
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    // =============Navigattion bar container=====================//
    <div className="navbar__container">
      {/* Navigation (left) container */}
      <div className="navbar-left-side__container">
        <div className="logo__container">
          <img src={logo1} alt="Hovapay" className="logo-img" />
        </div>
        <ul className="navbar-left-links__container">
          <li><Link to='/flights'>flights</Link></li>
          <li><Link to='/hotels'>hotels</Link></li>
          <li><Link to='/bills'>bills</Link></li>
          <li><Link to='/more'>more</Link></li>
        </ul>
      </div>

      {/* Navigation (right) container */}
      <ul className="navbar-right-side__container">
        <li><Link to='/support'>support</Link></li>
        <li><Link to='/features'>features</Link></li>
        <li><Link to='/features'>features</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
