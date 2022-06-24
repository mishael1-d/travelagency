import React, { useEffect, useState } from "react";
import BasicTabs from "../TabPanel/TabPanel";
import "./Hero.css";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Hero() {
  const bgArray = [bg1, bg2, bg3, bg4, bg5, bg6];
  const [bgNum, setBgNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgNum((v) => (v === 5 ? 0 : v + 1));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="hero-wrapper"
      style={{ backgroundImage: `url(${bgArray[bgNum]})` }}
    >
      <div className="hero-section__container container">
      <OwlCarousel
          items={1}
          autoplay={true}
          loop
        >
        <div>
          <p className="hero-subtitle">Welcome to HOVATRAVELS</p>
          <h3 className="hero-title">Search and Book Flights </h3>
          <h3 className="hero-title">and Hotels</h3>
        </div>
        <div>
          <p className="hero-subtitle">Looking for an ADVENTURE</p>
          <h3 className="hero-title">Search and Book Flights </h3>
          <h3 className="hero-title">on HOVATRAVELS</h3>
        </div>
        <div>
          <p className="hero-subtitle">Looking for a place to STAY on vacation</p>
          <h3 className="hero-title">Search and Book Hotels </h3>
          <h3 className="hero-title">on HOVATRAVELS</h3>
        </div>
        </OwlCarousel>
        <div className="tabpanel__container">
          <BasicTabs />
        </div>
      </div>
    </div>
  );
}

export default Hero;
