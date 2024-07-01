import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
import Context, { Climate } from "../../context/context";
import Loading from "../../component/Loading/Loading";
import bg_clear_day from "../../assets/img/bg_clear_day.png";
import bg_clody_night from "../../assets/img/bg_cloudy_night.png";
import cloudy_night from "../../assets/svg/cloudy_night.svg";
import { url } from "inspector";
import WeatherHeader from "./WeatherHeader";
import WeatherPrimary from "./WeatherPrimary";
import WeatherSegundary from "./WeatherSegundary";

const Weather = () => {
  return (
    <div>
      <div className="mx-3 rounded-lg bg-[#16161F] pb-5">
      <WeatherHeader />
      <WeatherPrimary />
      </div>
      <div>
        <WeatherSegundary />
      </div>
    </div>
  );
};

export default Weather;
