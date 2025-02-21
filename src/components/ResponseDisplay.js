import React from "react";

const ResponseDisplay = ({ response, selectedFilters }) => {
  return (
    <div style={{ color: "black" }}>
      <h2>Response</h2>
      <pre style={{ color: "black" }}>
        {selectedFilters.includes("Numbers") &&
          `Numbers: ${JSON.stringify(response.numbers, null, 2)}\n`}
        {selectedFilters.includes("Alphabets") &&
          `Alphabets: ${JSON.stringify(response.alphabets, null, 2)}\n`}
        {selectedFilters.includes("Highest Alphabet") &&
          `Highest Alphabet: ${JSON.stringify(response.highest_alphabet, null, 2)}\n`}
        {selectedFilters.length === 0 &&
          `${JSON.stringify(response, null, 2)}`}
      </pre>
    </div>
  );
};

export default ResponseDisplay;
