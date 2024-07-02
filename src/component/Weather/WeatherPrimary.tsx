import React, { useContext } from "react";
import Context, { Climate } from "../../context/context";
import Loading from "../../component/Loading/Loading";

import bg_clear_day from "../../assets/img/bg_clear_day.png";
import bg_clear_night from "../../assets/img/bg_clear_night.png";
import bg_cloudy_day from "../../assets/img/bg_cloudy_day.png";
import bg_cloudy_night from "../../assets/img/bg_cloudy_night.png";
import bg_few_clouds_day from "../../assets/img/bg_few_clouds_day.png";
import bg_few_clouds_night from "../../assets/img/bg_few_clouds_night.png";
import bg_rain_day from "../../assets/img/bg_rain_day.png";
import bg_rain_night from "../../assets/img/bg_rain_night.png";

import cloudy_day from "../../assets/svg/cloudy_day.svg";
import cloudy_night from "../../assets/svg/cloudy_night.svg";
import clear_day from "../../assets/svg/clear_day.svg";
import clear_night from "../../assets/svg/clear_night.svg";
import rain_moment_day from "../../assets/svg/rain_moment_day.svg";

const WeatherPrimary = () => {
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

  const { weatherData } = useContext(Context);

  const date = new Date();
  const Hour = date.getHours();
  const Minutes = date.getMinutes().toString().padStart(2, "0");
  const Time = `${Hour.toString().padStart(2, "0")}:${Minutes}`;
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

  const { description: weatherDescription, main: weatherMain } = weather[0];
  const locale = sys.country;

  const formattemp = Math.floor(temp);
  const formattempmin = Math.floor(temp_min);
  const formattempmax = Math.floor(temp_max);

  const isDayTime = Hour >= 6 && Hour < 18;

  const getBackgroundImage = () => {
    if (weatherMain === "Clear") {
      return isDayTime ? bg_clear_day : bg_clear_night;
    } else if (weatherMain === "Clouds") {
      if (all > 50) {
        return isDayTime ? bg_cloudy_day : bg_cloudy_night;
      } else {
        return isDayTime ? bg_few_clouds_day : bg_few_clouds_night;
      }
    } else if (weatherMain === "Rain") {
      return isDayTime ? bg_rain_day : bg_rain_night;
    } else {
      return isDayTime ? bg_clear_day : bg_clear_night;
    }
  };

  const getWeatherIcon = () => {
    if (weatherMain === "Clear") {
      return isDayTime ? clear_day : clear_night;
    } else if (weatherMain === "Clouds") {
      return isDayTime ? cloudy_day : cloudy_night;
    } else if (weatherMain === "Rain") {
      return isDayTime ? rain_moment_day : cloudy_night;
    } else {
      return isDayTime ? clear_day : clear_night;
    }
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        className="mx-5 h-full rounded-lg"
      >
        <div className="mx-5 mt-12 flex items-center justify-between py-3 text-white">
          <p className="text-2xl font-semibold">
            {name}, {locale}
          </p>
          <p className="font-semibold">{Time}</p>
        </div>
        <div className="mx-5 flex text-gray-200">
          <p>
            {weekdayName}, {Day} de {monthName} de {Year}
          </p>
        </div>
        <main className="gap- mx-5 mt-28 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">{formattemp}°c</h1>
            <div className="mt-2 flex font-medium text-white">
              <p>
                {formattempmin}°c / {formattempmax}°c{" "}
              </p>
            </div>
            <div>
              <p className="mt-1 font-medium text-white">
                {weatherDescription.charAt(0).toUpperCase() +
                  weatherDescription.slice(1).toLowerCase()}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={getWeatherIcon()}
              alt={weatherMain.toLowerCase()}
              className="ml-8 h-auto w-full"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default WeatherPrimary;
