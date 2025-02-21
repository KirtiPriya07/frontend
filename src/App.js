import { useState, useEffect } from "react";
import axios from "axios";
import MultiSelectDropdown from "./components/MultiSelectDropdown.js";
import ResponseDisplay from "./components/ResponseDisplay.js";
import "./App.css";

const API_URL = "https://khushivishwakarma.pythonanywhere.com/bfhl"; // Ensure this URL is correct and accessible

function App() {
    const [jsonInput, setJsonInput] = useState("");
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        document.title = "22BCS16270";
    }, []);

    const handleSubmit = async () => {
        console.log("Raw Input:", jsonInput);
        let parsedInput;
        // First, try parsing the JSON
        try {
            parsedInput = JSON.parse(jsonInput.trim());
            console.log("Parsed JSON:", parsedInput);

            if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
                setError("Invalid JSON format. Ensure it contains a 'data' array.");
                return;
            }
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError.message);
            setError("Invalid JSON format. Please check your input. " + parseError.message);
            return;
        }

        // Now, try making the API call
        try {
            setError(null); // Clear previous errors
            const res = await axios.post(API_URL, parsedInput, {
                headers: {
                    "Metadata": "22BCS16270"  // Custom metadata header
                }
            });
            setResponse(res.data);
        } catch (axiosError) {
            console.error("Axios Error:", axiosError.message);
            setError("Network error: " + axiosError.message);
        }
    };

    return (
        <div className="container">
            <h1>BAJAJ Finance Dev Challenge</h1>
            <textarea
                placeholder='Enter JSON (e.g. { "data": ["A", "C", "z"] })'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <p className="disclaimer" style={{ color: "black" }}>Select a filter</p>


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
