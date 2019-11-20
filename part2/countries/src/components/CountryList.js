import React from "react";
import Country from "./Country";

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countries.length === 1) {
    return <Country country={countries.pop()} />;
  }
  const countryList = countries.map(country => {
    return <li key={country.alpha2Code}>{country.name}</li>;
  });

  return <ul>{countryList}</ul>;
};

export default CountryList;
