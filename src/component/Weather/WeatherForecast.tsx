import React, { useContext } from "react";
import Context from "../../context/context";
import stormday from "../../assets/svg/storm_day.svg";
import rain_moment_day from "../../assets/svg/rain_moment_day.svg";
import few_clouds_night from "../../assets/svg/few_clouds_night.svg";
import few_clouds_day from "../../assets/svg/few_clouds_day.svg";
import cloudy_night from "../../assets/svg/cloudy_night.svg";
import cloudy_day from "../../assets/svg/cloudy_day.svg";
import clear_night from "../../assets/svg/clear_night.svg";
import clear_day from "../../assets/svg/clear_day.svg";

const WeatherForecast = () => {
  const weekday = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
  const date = new Date();
  const Day = date.getDay();
  const hour = date.getHours();
  const isDayTime = hour >= 6 && hour < 18;

  const isMobile = window.innerWidth < 768;
  const { forecastData } = useContext(Context);

  const getWeatherIcon = (weatherMain: any) => {
    switch (weatherMain) {
      case "Clear":
        return isDayTime ? clear_day : clear_night;
      case "Clouds":
        return isDayTime ? cloudy_day : cloudy_night;
      case "Rain":
        return rain_moment_day;
      case "Thunderstorm":
        return stormday;
      case "Few Clouds":
        return isDayTime ? few_clouds_day : few_clouds_night;
      default:
        return isDayTime ? clear_day : clear_night;
    }
  };

  const formatTemperature = (tempKelvin: number) => {
    const tempCelsius = tempKelvin - 273.15;

    const integerPart = Math.round(tempCelsius);
    return integerPart.toString();
  };

  return (
    <div className="mt-5 rounded-lg bg-[#16161F] lg:px-5 2xl:pb-10">
      <div>
        {!isMobile ? (
          <p className="p-5 text-xl text-[#696969]">Previsão para 5 dias</p>
        ) : null}
        <div className="flex justify-around p-3 2xl:w-[800px]">
          {forecastData.map((day, index) => (
            <div className="flex flex-col items-center" key={index}>
              <p className="font-medium text-[#606060]">
                {weekday[(Day + index) % 7]}
              </p>
              <img
                className="w-20 lg:w-32"
                src={getWeatherIcon(day.weather[0].main)}
                alt={day.weather[0].main}
              />
              {!isMobile ? (
                <p className="pb-2 text-center text-sm font-medium text-gray-400">
                  {day.weather[0].description}
                </p>
              ) : null}
              <div className="flex flex-col gap-3 lg:flex-row">
                <p className="text-sm font-semibold text-white">
                  {formatTemperature(day.main.temp_max)}°C
                </p>
                <p className="text-sm font-semibold text-gray-400">
                  {formatTemperature(day.main.temp_min)}°C
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
