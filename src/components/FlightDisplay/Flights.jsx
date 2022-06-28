import React from "react";
import im1 from "../../assets/Abuja.png";
import im2 from "../../assets/Accra.png";
import im3 from "../../assets/Instabul.jpg";
import im4 from "../../assets/Kigali.jpg";
import im5 from "../../assets/new-york.jpg";
import im6 from "../../assets/New Delhi.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Flights.css";
function Flights() {
  return (
    <div className="flight-wrapper">
      <div className="container">
        <div className="heading">
          <h3>Today's Flight Deals</h3>
        </div>
        <OwlCarousel
          className="owl-theme"
          items={3}
          margin={8}
          autoplay={false}
          loop
          nav
        >
          <figure>
            <img src={im1} alt="" className="img1" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div className="location">
                    <p>
                      Lagos
                      <span>Dubai</span>
                    </p>
                  </div>
                </div>
                <div className="airline-logo"></div>
              </div>
            </div>
            <div className="paynow-overlay__container">
            <div className="paynow-overlay__content">
                <div className="body1">
                  <p>Pay Now</p>
                  <h5>&#8358;330,502</h5>
                </div>
                <div className="pay-discount">
                <div className="body">
                  <p>Pay Now</p>
                  <h5>&#8358;93,540</h5>
                </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im2} alt="" className="img2" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Ibom Air</h5>
                  <div className="location">
                    <p>
                      Lagos
                      <span>London</span>
                    </p>
                  </div>
                </div>
                <div className="airline-logo"></div>
              </div>
            </div>
            <div className="paynow-overlay__container">
            <div className="paynow-overlay__content">
                <div className="body1">
                  <p>Pay Now</p>
                  <h5>&#8358;338,502</h5>
                </div>
                <div className="pay-discount">
                <div className="body">
                  <p>Pay Now</p>
                  <h5>&#8358;93,540</h5>
                </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im3} alt="" className="img3" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Fly Emirates</h5>
                  <div className="location">
                    <p>
                      Lagos
                      <span>Dubai</span>
                    </p>
                  </div>
                </div>
                <div className="airline-logo"></div>
              </div>
            </div>
            <div className="paynow-overlay__container">
            <div className="paynow-overlay__content">
                <div className="body1">
                  <p>Pay Now</p>
                  <h5>&#8358;330,502</h5>
                </div>
                <div className="pay-discount">
                <div className="body">
                  <p>Pay Now</p>
                  <h5>&#8358;93,540</h5>
                </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im4} alt="" className="img4" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div className="location">
                    <p>
                      Lagos
                      <span>Dubai</span>
                    </p>
                  </div>
                </div>
                <div className="airline-logo"></div>
              </div>
            </div>
            <div className="paynow-overlay__container">
            <div className="paynow-overlay__content">
                <div className="body1">
                  <p>Pay Now</p>
                  <h5>&#8358;330,502</h5>
                </div>
                <div className="pay-discount">
                <div className="body">
                  <p>Pay Now</p>
                  <h5>&#8358;93,540</h5>
                </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im5} alt="" className="img5" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div className="location">
                    <p>
                      Lagos
                      <span>Dubai</span>
                    </p>
                  </div>
                </div>
                <div className="airline-logo"></div>
              </div>
            </div>
            <div className="paynow-overlay__container">
            <div className="paynow-overlay__content">
                <div className="body1">
                  <p>Pay Now</p>
                  <h5>&#8358;330,502</h5>
                </div>
                <div className="pay-discount">
                <div className="body">
                  <p>Pay Now</p>
                  <h5>&#8358;93,540</h5>
                </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im6} alt="" className="img5" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div className="location">
                    <p>
                      Lagos
                      <span>Dubai</span>
                    </p>
                  </div>
                </div>
                <div className="airline-logo"></div>
              </div>
            </div>
            <div className="paynow-overlay__container">
            <div className="paynow-overlay__content">
                <div className="body1">
                  <p>Pay Now</p>
                  <h5>&#8358;330,502</h5>
                </div>
                <div className="pay-discount">
                <div className="body">
                  <p>Pay Now</p>
                  <h5>&#8358;93,540</h5>
                </div>
                </div>
              </div>
            </div>
          </figure>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Flights;
