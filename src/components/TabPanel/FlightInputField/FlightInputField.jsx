import * as React from "react";
import switchBtn from '../../../assets/switch.png';
import bestvalue from '../../../assets/bestvalue.png';
import "./FlightInputField.css";

export default function InputField() {
  return (
    <div className="inputField__container">
      <div className="flightSearchInput__container">
        <div className="inputContainer">
          <label htmlFor="from" className="input-label">
            From Where ?
          </label>
          <input type="text" id="from" placeholder="City or Airport" />
          <img src={switchBtn} alt="" />
        </div>
        <div className="inputContainer">
          <label htmlFor="from" className="input-label">
            To Where ?
          </label>
          <input type="text" id="from" placeholder="City or Airport" />
        </div>
      </div>
      <div className="right">
        <div className="flightRight__container">
          <div className="flightDate__container">
            <div className="dateContainer departing">
              <label htmlFor="from" className="input-label">
                Leaving on
              </label>

              <input type="date" id="from" placeholder="City or Airport" />
            </div>
            <div className="dateContainer returning">
              <label htmlFor="from" className="input-label">
                Returning on
              </label>
              <input type="date" id="from" placeholder="City or Airport" />
            </div>
          </div>
          <div className="search-btn">
            <button>Search Flights</button>
          </div>
        </div>
        <div className="bottom">
          <div className="checkbox_col">
            <div className="checkbox-input">
              <input type="checkbox" name="check" id="check" />
            </div>
            <p>My dates are flexible (+/- days)</p>
          </div>
          <div className="bestValue">
            <img src={bestvalue} alt="" />
            <p>Best Value guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
