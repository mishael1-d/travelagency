import React from "react";
import im1 from "../../assets/Abuja.png";
import im2 from "../../assets/Accra.png";
import im3 from "../../assets/Instabul.jpg";
import im4 from "../../assets/Kigali.jpg";
import im5 from "../../assets/new-york.jpg";
import im6 from "../../assets/New Delhi.png";
import verified from "../../assets/verified.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Flights.css";
function Flights() {
  return (
    <div className="flight-wrapper">
      <div className="container">
        <div className="heading">
          <h3>Popular Deals Today</h3>
          <img src={verified} alt="" />
        </div>
        <OwlCarousel className="owl-theme" items={3} margin={8} autoplay={true} loop nav>
          <figure>
            <img src={im1} alt="" className="img1" />
          </figure>
          <figure>
            <img src={im2} alt="" className="img2" />
          </figure>
          <figure>
            <img src={im3} alt="" className="img3" />
          </figure>
          <figure>
            <img src={im4} alt="" className="img4" />
          </figure>
          <figure>
            <img src={im5} alt="" className="img5" />
          </figure>
          <figure>
            <img src={im6} alt="" className="img5" />
          </figure>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Flights;
