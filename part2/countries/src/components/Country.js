import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const languages = country.languages.map(language => (
    <li key={language.iso639_1}>{language.name}</li>
  ));
  const capital = country.capital;

  useEffect(() => {
    const getWeather = async () => {
      if (!capital) {
        return () => null;
      }
      try {
        const response = await axios.get(
          `http://api.weatherstack.com/current?access_key=d2c9ceb4e13e53a656682ceebff84ce2&query=${capital}`
        );
        setWeather(response.data);
      } catch (err) {
        setWeather(null);
      }
    };
    getWeather();
  }, [capital]);

  const weatherOutput = weather ? <Weather data={weather} /> : "";

  return (
    <>
      <h1>
        {country.name} ({country.nativeName})
      </h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>{languages}</ul>
      <img width="300" src={country.flag} alt={country.name} />
      {weatherOutput}
    </>
  );
};

export default Country;
