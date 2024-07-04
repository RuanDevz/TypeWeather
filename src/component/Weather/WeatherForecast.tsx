import React, { useContext } from "react";
import Context from "../../context/context";
import stormday from "../../assets/svg/storm_day.svg";

const WeatherForecast = () => {
  const weekday = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
  const date = new Date();
  const Day = date.getDay();

  const { forecastData } = useContext(Context);

  const formatTemperature = (temp: number) => {
    const integerPart = Math.floor(temp).toString();
    return integerPart.slice(0, 2);
  };

  return (
    <div className="mx-3 mt-5 rounded-lg bg-[#16161F]">
      <div>
        <div className="flex justify-around p-3">
          {forecastData.map((day, index) => (
            <div className="flex flex-col items-center" key={index}>
              <p className="font-medium text-[#606060]">
                {weekday[(Day + index) % 7]}
              </p>
              <img className="w-52" src={stormday} alt="tempest" />
              <p className="text-sm font-semibold text-white">
                {formatTemperature(day.main.temp_max)}°c
              </p>
              <p className="text-sm font-semibold text-gray-400">
                {formatTemperature(day.main.temp_min)}°c
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
