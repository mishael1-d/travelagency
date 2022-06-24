import React from "react";
import logo1 from "../../assets/logo1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/flights">flights</Link>
          </li>
          <li>
            <Link to="/hotels">hotels</Link>
          </li>
        </ul>
      </div>

      {/* Navigation (right) container */}
      <ul className="navbar-right-side__container">
        <div className="support-dropdown">
          <li>
            support
          </li>
          <div className="support-dropdown-content">
            <a href="tel:+2347044040403">0704 404 0403</a>
          </div>
        </div>
        <div className="support-dropdown">
          <li>
            Menu
          </li>
          <div className="support-dropdown-content">
          <li>
          <Link to="/features">Sign up | Login</Link>
        </li>
          </div>
        </div>
        
      </ul>
    </div>
  );
}

export default Navbar;
