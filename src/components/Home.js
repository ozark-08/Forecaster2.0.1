import React, { useState } from "react";
import axios from "axios";
import Main from "./Main";
import Home from "./Home";

function Home() {
  // const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const data = useApi(searchInput);
  const backgroundImage = backgroundImage(searchInput);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setSearchInput(location);
    }
  };

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=876f42ba7a2783b75e03b778c7e87e01`;

  // const searchLocation = (event) => {
  //   if (event.key === "Enter") {
  //     axios.get(url).then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     });
  //     setLocation("");
  //   }
  // };

  return (
    <>
      <div className="app" style={{ backgroundImage: backgroundImage }}>
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>

        {!data.name ? <p>No Data Found</p> : <Main data={data} />}
      </div>
    </>
  );
}

export default Home;
