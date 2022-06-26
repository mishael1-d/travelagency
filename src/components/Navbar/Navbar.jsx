import React from "react";
import logo1 from "../../assets/logo1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import call from "../../assets/call.png";
import whatsapp from "../../assets/Whatsapp.png";
import mail from "../../assets/mail.png";
import flag from "../../assets/flag.png";

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
            <Link to="">flights</Link>
          </li>
          <li>
            <Link to="">hotels</Link>
          </li>
          <li>
            <Link to="">More</Link>
          </li>
        </ul>
      </div>

      {/* Navigation (right) container */}
      <ul className="navbar-right-side__container">
        <div className="support-dropdown">
          <li>support</li>
          <div className="support-dropdown-content">
            <div className="support-dropdown-item">
              <img src={call} alt="" className="support-item-img" />
              <a href="tel:+2347044040403">0704 404 0403</a>
            </div>
            <div className="support-dropdown-item">
              <img src={whatsapp} alt="" className="support-item-img" />
              <a href="tel:+2347044040403">WhatsApp</a>
            </div>
            <div className="support-dropdown-item">
              <img src={mail} alt="" className="support-item-img" />
              <a href="mailto:support@hovapay.ng">support@hovapay.ng</a>
            </div>
          </div>
        </div>
        <li className="currency">
          <img src={flag} alt="" />
          <span>NGN</span>
        </li>
        <li>Manage My Booking</li>
      </ul>
    </div>
  );
}

export default Navbar;
