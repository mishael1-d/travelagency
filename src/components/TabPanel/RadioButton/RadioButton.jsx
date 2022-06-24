import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './RadioButton.css'

export default function RowRadioButtonsGroup() {
  const [value, setValue] = React.useState('One Way');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Trip Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
        <FormControlLabel value="Round Trip" control={<Radio />} label="Round Trip" />
      </RadioGroup>
    </FormControl>
  );
}
