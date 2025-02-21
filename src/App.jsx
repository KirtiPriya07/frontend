import { useState, useEffect } from "react";
import axios from "axios";
import MultiSelectDropdown from "./components/MultiSelectDropdown";
import ResponseDisplay from "./components/ResponseDisplay";
import "./App.css";

const API_URL = "https://khushivishwakarma.pythonanywhere.com/bfhl";  // Ensure it's correct
 
 // Replace with your backend API URL

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    document.title = "22BCS14794"; // Set website title to your roll number
  }, []);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        setError("Invalid JSON format. Ensure it contains a 'data' array.");
        return;
      }

      setError(null);
      const res = await axios.post(API_URL, parsedInput);
      setResponse(res.data);
    } catch (err) {
      setError("Invalid JSON format. Please check your input.");
    }
  };

  return (
    <div className="container">
      <h1>BFHL Frontend</h1>
      <textarea
        placeholder='Enter JSON (e.g. { "data": ["A", "C", "z"] })'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {error && <p className="error">{error}</p>}

      {response && (
        <>
          <MultiSelectDropdown setSelectedFilters={setSelectedFilters} />
          <ResponseDisplay response={response} selectedFilters={selectedFilters} />
        </>
      )}
    </div>
  );
}

export default App;
