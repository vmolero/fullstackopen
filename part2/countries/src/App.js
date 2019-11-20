import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";

function App() {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleCountryChange = event => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const getCountry = async () => {
      setData([]);
      setError("");
      if (country) {
        try {
          const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${country}`
          );
          setData(response.data);
        } catch (err) {
          setError(err.message);
        }
      }
    };
    getCountry();
  }, [country]);

  const output = error ? <p>{error}</p> : <CountryList countries={data} />;

  return (
    <div>
      <div>
        Find countries:
        <input type="text" onChange={handleCountryChange} />
      </div>
      <div>{output}</div>
    </div>
  );
}

export default App;
