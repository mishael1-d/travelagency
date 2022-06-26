import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./Dropdowns.css";

export default function BasicSelect({ type }) {
  // const [passengerFlightDetails, setpassengerFlightDetails] = React.useState({
  //   flightFrom: "",
  //   flightTo: "",
  //   departing: "",
  //   returning: "",
  //   adult: "",
  //   child: "",
  // });
  const [passengerHotelDetails, setpassengerHotelDetails] = React.useState({
    name: "",
    checkIn: "",
    checkOut: "",
    adult: "",
  });
  const [value, setValue] = React.useState(new Date());

  // const handleFlightChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setpassengerFlightDetails({ ...passengerFlightDetails, [name]: value });
  // };
  const handleHotelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setpassengerHotelDetails({ ...passengerHotelDetails, [name]: value });
  };

  return (
    <Box sx={{ minWidth: 120 }} className="autocomplete-box">
      {type === "flight" ? (
        <>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="From" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="To" />}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Departing"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Returning"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}

          {/* <FormControl>
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
          </FormControl> */}
        </>
      ) : (
        <>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label="Name of City" />}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Check-in"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider> */}
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

const top100Films = [
  "London",
  "Egypt",
  "United States",
  "Nigeria",
  "Ghana",
  "Dubai",
  "Iran",
  "Iraq",
  "Isreal",
];
