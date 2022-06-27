import * as React from "react";
import Select from "react-select";
import "./Dropdowns.css";

export default function BasicSelect({ type }) {
 
  return (
    <div className="select-dropdown__container">
      <Select
        className="select-btn"
        classNamePrefix="select-dropdown"
        defaultValue={options1[0]}
        isSearchable={true}
        name="Trip Type"
        options={options1}
      />
      <Select
        className="select-btn"
        classNamePrefix="select-dropdown"
        defaultValue={options2[0]}
        isSearchable={true}
        name="Trip Type"
        options={options2}
      />
      <Select
        className="select-btn"
        classNamePrefix="select-dropdown"
        defaultValue={options3[0]}
        isSearchable={true}
        name="Trip Type"
        options={options3}
      />
    </div>
  );
}


const options1 = [
  {value: 'london', label: 'London'},
  {value: 'ghana', label: 'Ghana'},
  {value: 'india', label: 'India'},
  {value: 'togo', label: 'Togo'},
]
const options2 = [
  {value: '1 Passenger', label: '1 Passenger'},
  {value: 'ghana', label: 'Ghana'},
  {value: 'india', label: 'India'},
  {value: 'togo', label: 'Togo'},
]
const options3 = [
  {value: 'Economy', label: 'Economy'},
  {value: 'ghana', label: 'Ghana'},
  {value: 'india', label: 'India'},
  {value: 'togo', label: 'Togo'},
]