import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
import Context, { Climate } from "../../context/context";
import Loading from '../../component/Loading/Loading'

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
  const Hour = date.getHours().toString().padStart(2, '0');
  const Minutes = date.getMinutes().toString().padStart(2, '0');
  const Time = `${Hour}:${Minutes}`;
  const Day = date.getDay(); 
  const Month = date.getMonth(); 
  const Year = date.getFullYear();

  const weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const weekdayName = weekdays[Day];

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const monthName = months[Month];

  console.log(weatherData);

  if (!isClimate(weatherData)) {
    return <Loading>Previsões</Loading>;
  }

  const {
    name,
    main: { temp, temp_min, temp_max, humidity },
    weather,
    clouds: { all },
    wind: { speed },
  } = weatherData;

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
      <div className="text-white">
        <p>{Time}</p>
        <p>Data: {weekdayName}, {date.getDate()} de {monthName} de {Year}</p>
        <p>Cidade: {name}</p>
        <p>Temperatura: {temp} °C</p>
        <p>Temperatura Mínima: {temp_min} °C</p>
        <p>Temperatura Máxima: {temp_max} °C</p>
        <p>Umidade: {humidity} %</p>
        <p>Nuvens: {all}%</p>
        <p>Vento: {speed} m/s</p>
        <p>Descrição: {weather[0].description}</p>{" "}
      </div>
    </div>
  );
};

export default Weather;
