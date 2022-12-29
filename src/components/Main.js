import React, { useState } from "react";

function Main(props) {
  const { data } = props;

  const fTemp = Math.round(data.main.temp * 1.8 + 32);

  // const [temp, setTemp] = useState(data.main.temp);
  const [unit, setUnit] = useState("°C");
  // console.log(temp);

  const oppositeUnit = unit === "°C" ? "°F" : "°C";
  console.log("UNIT", oppositeUnit);

  // useEffect(() => {
  //   setTemp(data.main.temp);
  //   if (unit === "°C") {
  //     convert();
  //   }
  // }, [data.main.temp]);

  const convert = () => {
    // if (unit === "°C") {
    // const newT = temp * 1.8 + 32;
    // setTemp(Math.round(newT));
    setUnit(oppositeUnit);
    // }

    // if (unit === "°F") {
    // const newT = ((temp - 32) * 5) / 9;
    // setTemp(Math.round(newT));
    // setUnit(oppositeUnit);
    // }
  };

  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="location my-3">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
            <p>
              Temperature {unit === "°C" ? data.main.temp : fTemp} {unit}
            </p>
            <button onClick={convert}>Change to {oppositeUnit}</button>
            {/* <button onClick={data.main.temp ? convert : null}>Change to {oppositeUnit}</button> */}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}

            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
