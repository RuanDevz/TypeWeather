import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
import Context, { Climate } from "../../context/context";
import Loading from "../../component/Loading/Loading";
import bg_clear_day from "../../assets/img/bg_clear_day.png";
import bg_clody_night from "../../assets/img/bg_cloudy_night.png";
import cloudy_night from "../../assets/svg/cloudy_night.svg";
import { url } from "inspector";

const isClimate = (data: any): data is Climate => {
  return (
    typeof data.name === "string" &&
    typeof data.main === "object" &&
    typeof data.main.temp === "number" &&
    typeof data.main.temp_min === "number" &&
    typeof data.main.temp_max === "number" &&
    typeof data.main.humidity === "number" &&
    Array.isArray(data.weather) &&
    data.weather.length > 0 &&
    typeof data.clouds === "object" &&
    typeof data.clouds.all === "number" &&
    typeof data.wind === "object" &&
    typeof data.wind.speed === "number"
  );
};

const Weather = () => {
  const { weatherData } = useContext(Context);

  const date = new Date();
  const Hour = date.getHours().toString().padStart(2, "0");
  const Minutes = date.getMinutes().toString().padStart(2, "0");
  const Time = `${Hour}:${Minutes}`;
  const Day = date.getDay();
  const Month = date.getMonth();
  const Year = date.getFullYear();

  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const weekdayName = weekdays[Day];

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const monthName = months[Month];

  console.log(weatherData);

  if (!isClimate(weatherData)) {
    return <Loading>Previsões</Loading>;
  }

  const {
    name,
    main: { temp, temp_min, temp_max, humidity },
    weather,
    sys,
    clouds: { all },
    wind: { speed },
  } = weatherData;

  const { description: weatherDescription } = weather[0];
const locale = sys.country


  const description = weatherDescription;

  const formattemp = Math.floor(temp);
  const formattempmin = Math.floor(temp_min);
  const formattempmax = Math.floor(temp_max);

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
      <div
        style={{ backgroundImage: `url(${bg_clody_night})` }}
        className="mx-5 h-[334px] rounded-lg"
      >
        <div className="mx-5 mt-12 flex items-center justify-between py-3 text-white">
          <p className="text-2xl font-semibold">{name}, {locale}</p>
          <p className="font-semibold">{Time}</p>
        </div>
        <div className="mx-5 flex text-gray-200">
          <p>{weekdayName},</p>
          <p>{Day}</p>
          <p>
            de {monthName}
            <span></span>
          </p>
          <p>de {Year}</p>
        </div>
        <main className="gap- mx-5 mt-28 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">{formattemp}°c</h1>
            <div className="mt-2 flex font-medium text-white">
              <p>{formattempmin}°c /</p>
              <p>{formattempmax}°c</p>
            </div>
            <div>
              <p className="font-normal text-white">{description}</p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={cloudy_night}
              alt="cloudy night"
              className="ml-8 h-auto w-full"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Weather;
