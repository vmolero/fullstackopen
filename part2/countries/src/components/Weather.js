import React from "react";

const Weather = ({ data }) => {
  if (data) {
    const cityName = data.location.name;
    const temperature = data.current.temperature;
    const wind =
      data.current.wind_speed + " kph direction " + data.current.wind_dir;

    return (
      <>
        <h3>Weather in {cityName}</h3>
        <p>
          <b>temperature:</b> {temperature}º Celsius
        </p>
        <img
          src={data.current.weather_icons[0]}
          alt={data.current.weather_descriptions[0]}
        />
        <p>
          <b>wind:</b> {wind}
        </p>
      </>
    );
  }
  return <></>;
};

export default Weather;
