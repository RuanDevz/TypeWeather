import React from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
const WeatherHeader = () => {
  return (
    <div>
      <header className="pt-10 flex justify-around font-primary">
        <div className="rounded-lg bg-[#1E1E29] p-5">
          <img className="w-7" src={logo} alt="logo" />
        </div>
        <Input
          placeholder="Buscar Local"
          className="w-[271px] rounded-lg bg-[#1E1E29] indent-3 text-white focus:outline-none lg:w-[500px]"
          id="Search"
        />
      </header>
    </div>
  );
};

export default WeatherHeader;
