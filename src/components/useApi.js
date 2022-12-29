import { useState } from "react";
import axios from "axios";

const useApi = (location) => {
  const [data, setData] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=876f42ba7a2783b75e03b778c7e87e01`;

  axios.get(url).then((response) => {
    setData(response.data);
  });

  return data;
};
