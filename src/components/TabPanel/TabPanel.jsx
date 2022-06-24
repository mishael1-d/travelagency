import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dropdowns from "./Dropdown/Dropdowns";
import "./TabPanel.css";
import { Button } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import LuggageIcon from "@mui/icons-material/Luggage";
import RadioButton from "./RadioButton/RadioButton";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<FlightIcon />}
            iconPosition="start"
            label="Book Flights"
            className="tab"
            {...a11yProps(0)}
          />
          <Tab
            icon={<LuggageIcon />}
            iconPosition="start"
            label="Book Hotels"
            className="tab"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} id="tabpanel__container">
        <RadioButton className="radio__container" type="flight"/>
        <div className="tabpanel-dropdown">
          <Dropdowns type="flight" />
          <Button variant="outlined">Search</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} id="tabpanel__container">
      <RadioButton className="radio__container" type="hotel"/>
        <div className="tabpanel-dropdown" id="hotel">
          <Dropdowns type="hotel" />
          <Button variant="outlined">Search</Button>
        </div>
      </TabPanel>
    </Box>
  );
}
