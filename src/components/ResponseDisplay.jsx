import React from "react";

const ResponseDisplay = ({ response, selectedFilters }) => {
  return (
    <div>
      <h2>Response</h2>
      <pre>
        {selectedFilters.includes("Numbers") && `Numbers: ${JSON.stringify(response.numbers)}\n`}
        {selectedFilters.includes("Alphabets") && `Alphabets: ${JSON.stringify(response.alphabets)}\n`}
        {selectedFilters.includes("Highest Alphabet") &&
          `Highest Alphabet: ${JSON.stringify(response.highest_alphabet)}\n`}
      </pre>
    </div>
  );
};

export default ResponseDisplay;
