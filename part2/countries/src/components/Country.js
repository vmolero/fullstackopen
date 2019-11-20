import React from "react";

const Country = ({ country }) => {
  const languages = country.languages.map(language => (
    <li key={language.iso639_1}>{language.name}</li>
  ));
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
    </>
  );
};

export default Country;
