import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="content">
          <h5>HovaTravels</h5>
          <ul className="footer-links__container">
            <li className="footer-links">About Us</li>
            <li className="footer-links">Privacy Policy</li>
            <li className="footer-links">Terms and Conditions</li>
            <li className="footer-links">Contact Us</li>
          </ul>
          <p className="copyright">Copyright &copy; 2022 HOVATRAVELS.COM LIMITED.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
