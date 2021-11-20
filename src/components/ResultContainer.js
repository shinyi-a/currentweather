import React from "react";
import { Link } from "react-router-dom";

const ResultContainer = ({
  country,
  temp,
  cloud,
  uv,
  humidity,
  text,
  icon,
  wind,
}) => {
  return (
    <div className="container">
      <div className="result">
        <img src={icon} alt={text} />
        <h1 className="cursornone">{country}</h1>
        <h2 className="cursornone">{text}</h2>
        <br />
        <h2 className="nobold cursornone">temperature: {temp}°C</h2>
        <h2 className="nobold cursornone">cloud: {cloud}%</h2>
        <h2 className="nobold cursornone">uv index: {uv}</h2>
        <h2 className="nobold cursornone">humidity: {humidity}%</h2>
        <h2 className="nobold cursornone">wind speed: {wind}kph</h2>
        <br />
      </div>
      <Link to="/currentweather">
        <button className="gohome">go home</button>
      </Link>
    </div>
  );
};

export default ResultContainer;
