import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Dropdowns.css";

export default function BasicSelect({ type }) {
  const [passengerDetails, setPassengerDetails] = React.useState({
    tripType: "",
    numOfPassengers: "",
    passengerClass: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPassengerDetails({ ...passengerDetails, [name]: value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      {type === "flight" ? (
        <>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Round Trip</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerDetails.tripType}
              name="tripType"
              placeholder="Round trip"
              onChange={handleChange}
            >
              <MenuItem value={10}>Round trip</MenuItem>
              <MenuItem value={20}>One-way</MenuItem>
              <MenuItem value={30}>Multi-city</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Passenger</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerDetails.numOfPassengers}
              name="numOfPassengers"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Economy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerDetails.passengerClass}
              name="passengerClass"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Economy</MenuItem>
              <MenuItem value={20}>Premium Economy</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>First Class</MenuItem>
            </Select>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Rooms</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerDetails.tripType}
              name="tripType"
              placeholder="Round trip"
              onChange={handleChange}
            >
              <MenuItem value={10}>Round trip</MenuItem>
              <MenuItem value={20}>One-way</MenuItem>
              <MenuItem value={30}>Multi-city</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Passenger</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerDetails.numOfPassengers}
              name="numOfPassengers"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Economy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerDetails.passengerClass}
              name="passengerClass"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Economy</MenuItem>
              <MenuItem value={20}>Premium Economy</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>First Class</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
    </Box>
  );
}
