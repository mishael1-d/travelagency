import * as React from "react";
import "./TabPanel.css";

export const FirstTab = () => {
  return (
    <div className="firstTab">
      <p>First Tab</p>
    </div>
  );
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
          Tab 1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Tab 2
        </li>
      </ul>
      <div className="tab-content__container">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
}
export default TabPanel;
