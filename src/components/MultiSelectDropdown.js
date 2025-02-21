import React from "react";

const MultiSelectDropdown = ({ setSelectedFilters }) => {
  const options = ["Alphabets", "Numbers", "Highest Alphabet"];

  const handleChange = (event) => {
    // Get all selected option values as an array
    const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedFilters(selectedValues);
  };

  return (
    <select multiple onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectDropdown;
