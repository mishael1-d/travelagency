import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './RadioButton.css'

export default function RowRadioButtonsGroup({type}) {
  const [tripValue, setTripValue] = React.useState('One Way');
  const [classValue, setClassValue] = React.useState('Economy');

  const handleTripChange = (event) => {
    setTripValue(event.target.value);
  };
  const handleClassChange = (event) => {
    setClassValue(event.target.value);
  };
  return (
    <div id="radiobutton__container">
      {type === "flight" ? <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Trip Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group1"
          value={tripValue}
          onChange={handleTripChange}
        >
          <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
          <FormControlLabel value="Round Trip" control={<Radio />} label="Round Trip" />
        </RadioGroup>
      </FormControl>
      <div className="divider-v"></div>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Flight Class</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group2"
          value={classValue}
          onChange={handleClassChange}
        >
          <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
          <FormControlLabel value="Business" control={<Radio />} label="Business" />
          <FormControlLabel value="First Class" control={<Radio />} label="First Class" />
        </RadioGroup>
      </FormControl>
      </> : <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">What are you traveling for</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group1"
          value={tripValue}
          onChange={handleTripChange}
        >
          <FormControlLabel value="Business" control={<Radio />} label="Business" />
          <FormControlLabel value="Leisure" control={<Radio />} label="Leisure" />
        </RadioGroup>
      </FormControl>
      </>}
    </div>
  );
}
