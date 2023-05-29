import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Moment from "react-moment";

function App() {
  const [day1, setDay1] = useState([]);
  const [weatherDay1, setWeatherDay1] = useState([]);
  const [day2, setDay2] = useState([]);
  const [weatherDay2, setWeatherDay2] = useState([]);
  const [day3, setDay3] = useState([]);
  const [weatherDay3, setWeatherDay3] = useState([]);
  const [day4, setDay4] = useState([]);
  const [weatherDay4, setWeatherDay4] = useState([]);
  const [day5, setDay5] = useState([]);
  const [weatherDay5, setWeatherDay5] = useState([]);
  const getData = async () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=${process.env.REACT_APP_KEY}&units=metric`
      )
      .then((res) => {
        console.log(res.data.list);
        setDay1(res.data.list[8].dt_txt);
        setWeatherDay1(res.data.list[8].main.temp);
        setDay2(res.data.list[16].dt_txt);
        setWeatherDay2(res.data.list[16].main.temp);
        setDay3(res.data.list[24].dt_txt);
        setWeatherDay3(res.data.list[24].main.temp);
        setDay4(res.data.list[32].dt_txt);
        setWeatherDay4(res.data.list[32].main.temp);
        setDay5(res.data.list[39].dt_txt);
        setWeatherDay5(res.data.list[39].main.temp);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h4>Weather Forecast :</h4>
      <h5>
        <Moment format="LLLL">{day1}</Moment> : {weatherDay1}°C
      </h5>
      <h5>
        <Moment format="LLLL">{day2}</Moment> : {weatherDay2}°C
      </h5>
      <h5>
        <Moment format="LLLL">{day3}</Moment> : {weatherDay3}°C
      </h5>
      <h5>
        <Moment format="LLLL">{day4}</Moment> : {weatherDay4}°C
      </h5>
      <h5>
        <Moment format="LLLL">{day5}</Moment> : {weatherDay5}°C
      </h5>
    </>
  );
}

export default App;
