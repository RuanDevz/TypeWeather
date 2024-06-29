import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
import Context, { Climate } from "../../context/context";

const Weather = () => {
  const { weatherData } = useContext(Context);

  console.log(weatherData);

  if (!weatherData) {
    return <div>Loading...</div>; // Pode adicionar um indicador de carregamento enquanto os dados estão sendo buscados
  }

  // Desestruturação das propriedades de weatherData
  const {
    name,
    main: { temp, temp_min, temp_max, humidity },
    weather,
    clouds: { all },
    wind: { speed },
  } = weatherData as Climate;

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
        {/* Exemplo de como exibir as informações */}
        <p>Cidade: {name}</p>
        <p>Temperatura: {temp} °C</p>
        <p>Temperatura Mínima: {temp_min} °C</p>
        <p>Temperatura Máxima: {temp_max} °C</p>
        <p>Umidade: {humidity} %</p>
        <p>Nuvens: {all}%</p>
        <p>Vento: {speed} m/s</p>
        {/* Exemplo de como acessar a descrição do clima (o primeiro item no array de weather) */}
        {weather && weather.length > 0 && <p>Descrição: {weather[0].description}</p>}
      </div>
    </div>
  );
};

export default Weather;
