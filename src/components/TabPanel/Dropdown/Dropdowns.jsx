import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Dropdowns.css";

export default function BasicSelect({ type }) {
  const [passengerFlightDetails, setpassengerFlightDetails] = React.useState({
    flightFrom: "",
    flightTo: "",
    departing: '',
    returning: '',
    adult: '',
    child: '',
  });
  const [passengerHotelDetails, setpassengerHotelDetails] = React.useState({
    name: "",
    checkIn: '',
    checkOut: '',
    adult: '',
  });
  const handleFlightChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setpassengerFlightDetails({ ...passengerFlightDetails, [name]: value });
  };
  const handleHotelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setpassengerHotelDetails({ ...passengerHotelDetails, [name]: value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      {type === "flight" ? (
        <>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Flying From:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerFlightDetails.flightFrom}
              name="flightFrom"
              placeholder="Name of city"
              onChange={handleFlightChange}
            >
              <MenuItem value={10}>United States</MenuItem>
              <MenuItem value={20}>Dubai</MenuItem>
              <MenuItem value={30}>Ghana</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">To:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerFlightDetails.flightTo}
              name="flightTo"
              label="Age"
              onChange={handleFlightChange}
            >
              <MenuItem value={10}>Japan</MenuItem>
              <MenuItem value={20}>India</MenuItem>
              <MenuItem value={30}>Nigeria</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Departing:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerFlightDetails.departing}
              name="departing"
              label="Age"
              onChange={handleFlightChange}
            >
              <MenuItem value={10}>Economy</MenuItem>
              <MenuItem value={20}>Premium Economy</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>First Class</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Returning:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerFlightDetails.returning}
              name="returning"
              label="Age"
              onChange={handleFlightChange}
            >
              <MenuItem value={10}>Economy</MenuItem>
              <MenuItem value={20}>Premium Economy</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>First Class</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Adult:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-adult"
              value={passengerFlightDetails.adult}
              name="adult"
              label="Age"
              onChange={handleFlightChange}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={40}>4</MenuItem>
              <MenuItem value={50}>5</MenuItem>
              <MenuItem value={60}>6</MenuItem>
              <MenuItem value={70}>7</MenuItem>
              <MenuItem value={80}>8</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Child:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-child"
              value={passengerFlightDetails.child}
              name="child"
              label="child"
              onChange={handleFlightChange}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={40}>4</MenuItem>
              <MenuItem value={50}>5</MenuItem>
              <MenuItem value={60}>6</MenuItem>
              <MenuItem value={70}>7</MenuItem>
              <MenuItem value={80}>8</MenuItem>
            </Select>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Name of city</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-name"
              value={passengerHotelDetails.name}
              name="name"
              placeholder="Round trip"
              onChange={handleHotelChange}
            >
              <MenuItem value={10}>Round trip</MenuItem>
              <MenuItem value={20}>One-way</MenuItem>
              <MenuItem value={30}>Multi-city</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Check-in</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerHotelDetails.checkIn}
              name="checkIn"
              label="Age"
              onChange={handleHotelChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Check-out</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengerHotelDetails.checkOut}
              name="checkOut"
              label="Age"
              onChange={handleHotelChange}
            >
              <MenuItem value={10}>Economy</MenuItem>
              <MenuItem value={20}>Premium Economy</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>First Class</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Adult</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-adult"
              value={passengerHotelDetails.adult}
              name="adult"
              label="Age"
              onChange={handleHotelChange}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={40}>4</MenuItem>
              <MenuItem value={50}>5</MenuItem>
              <MenuItem value={60}>6</MenuItem>
              <MenuItem value={70}>7</MenuItem>
              <MenuItem value={80}>8</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
    </Box>
  );
}
