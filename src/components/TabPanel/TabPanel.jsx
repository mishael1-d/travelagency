import * as React from "react";
import flightIcon from "../../assets/flight.png";
import hotelIcon from "../../assets/hotel.png";
import BasicSelect from "./Dropdown/Dropdowns";
import "./TabPanel.css";

export const FirstTab = () => {
  return <div className="firstTab">
   <BasicSelect />
  </div>;
};
export const SecondTab = () => {
  return (
    <div className="secondTab">
      <p>Second Tab</p>
    </div>
  );
};

function TabPanel() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="tabpanel__container">
      <ul className="tab-nav__container">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          <div className="tab-title">
            <img src={flightIcon} alt="" />
            <p>Book Flights</p>
          </div>
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          <div className="tab-title">
            <img src={hotelIcon} alt="" />
            <p>Find Hotels</p>
          </div>
        </li>
      </ul>
      <div className="tab-content__container">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
}
export default TabPanel;
