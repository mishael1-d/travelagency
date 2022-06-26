import * as React from "react";

export  const FirstTab = () => {
  return (
    <div className="firstTab">
      <p>First Tab</p>
    </div>
  )
}
export  const SecondTab = () => {
  return (
    <div className="secondTab">
      <p>Second Tab</p>
    </div>
  )
}


function TabPanel(props) {
  return (
    <div className="tabpanel__container">
      <ul className="tab-nav__container">
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="tab-content__container"></div>
    </div>
  );
}
export default TabPanel;
