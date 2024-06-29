import { Input } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/img/LogoWeather.png";
import ClearNight from "../Bg-Tempo-Limpo-Noite/ClearNight";
import ClearDay from '../../assets/svg/clear_day.svg'
import Cloudrainlight from '../../assets/svg/cloud_rain_light.svg'
import Cloudy_day from '../../assets/cloudy_day.svg'
import Cloudy_night from '../../assets/cloudy_night.svg'
import drop_light from '../../assets/drop_light.svg'
import few_clounds_day from '../../assets/few_clounds_day.svg'
import few_clouds_night from '../../assets/few_clouds_night.svg'
import rain_moment_day from '../../assets/rain_moment_day.svg'
import snow_day from '../../assets/snow_day.svg'
import snow_night from '../../assets/snow_night.svg'
import storm_day from '../../assets/storm_day.svg'
import sun_dim_light from '../../assets/sun_dim_light.svg'
import thermometer_simple_light from '../../assets/thermometer_simple_light.svg'
import wind_light from '../../assets/wind_light.svg'


const Weather = () => {
  return (
    <div>
      <header className="mt-10 flex justify-around">
        <div className="rounded-lg bg-[#1E1E29] p-5">
          <img className="w-7" src={logo} alt="logo" />
        </div>
        <Input
          placeholder="Buscar Local"
          className="w-[271px] rounded-lg bg-[#1E1E29] indent-3 text-white focus:outline-none lg:w-[500px]"
          id="Search"
        />
      </header>
      <div>
        <ClearNight/>
      </div>
    </div>
  );
};

export default Weather;
