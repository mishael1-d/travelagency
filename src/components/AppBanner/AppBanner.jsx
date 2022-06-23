import React from "react";
import appBanner from "../../assets/app-download.png";
import IOS from '../../assets/IOS-image.png'
import Andriod from '../../assets/Play-store.png'
import qr from '../../assets/app-qr.svg'
import './AppBanner.css'

function AppBanner() {
  return (
    <div className="app-banner__wrapper">
      <div className="container">
        <div className="app_advert_container">
          <img src={appBanner} alt="" className="advert_img" />
          <div className="app-advert__content">
            <h2>Get an amazing mobile app experience</h2>
            <p>
              Download our Mobile App free today to book your flights, hotels,
              and visas and get amazing deals on the go!
            </p>
            <div className="download-links">
              <div className="store-links">
                  <img src={IOS} alt="" className="d-links ios"/>
                  <img src={Andriod} alt="" className="d-links" />
              </div>
              <div className="qr-code-link">
                  <img src={qr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
