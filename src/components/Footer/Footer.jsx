import React from "react";
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import tw from '../../assets/tw.png'
import ln from '../../assets/ln.png'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="content__container">
          <div className="content-left">
            <div className="content-left__top">
              <h5>Get exclusive deals on our products</h5>
              <p>
                Book Flights, Flight Status, Search Hotels Domestic Flights,
                International <br />
                Flights Holiday Packages, Visa Assistance, Travel Card, Travel
                Sim, Pay <br />
                Small Small
              </p>
            </div>
            <div className="dotted-lines"></div>
            <div className="content-left__top">
              <h5>Get inspired for your next trip</h5>
              <p>
                Find informattion about the best travel destinations and events
                in our <br />
                Dreamguides. Discover our travel guide.
              </p>
            </div>
          </div>
          <div className="content-middle">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li>Blog</li>
              <li>Bill Payment</li>
              <li>Refer a customer</li>
              <li>Contact Us</li>
              <li>Hovatravel Affiliates</li>
            </ul>
          </div>
          <div className="dotted-lines"></div>
          <div className="content-right">
            <h5>Follow Us</h5>
            <p>Stay tuned and access <br/>latest deals and discounts <br/>with:</p>
            <ul className="footer-sm-links">
            <li><img src={fb} alt="" /></li>
            <li><img src={ig} alt="" /></li>
            <li><img src={tw} alt="" /></li>
            <li><img src={ln} alt="" /></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>2022 Hovatravel Limited. All right reserved</p>
          <div className="copy-right">
            <a href="https://google.com">Privacy Policy</a>
            <a href="https://google.com">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
