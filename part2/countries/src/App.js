import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";

function App() {
  const [country, setCountry] = useState("");
  const [isoCode, setIsoCode] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleCountryChange = event => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const getCountries = async () => {
      setData([]);
      setError("");
      setIsoCode(null);
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
    getCountries();
  }, [country]);

  useEffect(() => {
    const getCountry = async () => {
      if (!isoCode) {
        return () => null;
      }
      setData([]);
      setError("");
      setCountry("");
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${isoCode}`
        );
        setData([response.data]);
      } catch (err) {
        setError(err.message);
      }
    };
    getCountry();
  }, [isoCode]);

  const handleShow = isoCode => event => {
    setIsoCode(isoCode);
  };

  const output = error ? (
    <p>{error}</p>
  ) : (
    <CountryList countries={data} handleShow={handleShow} />
  );

  return (
    <div>
      <div>
        Find countries:
        <input type="text" value={country} onChange={handleCountryChange} />
      </div>
      <div>{output}</div>
    </div>
  );
}

export default App;
