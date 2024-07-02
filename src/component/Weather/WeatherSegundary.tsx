import React, { useContext } from "react";
import Temperatura from "../../assets/svg/Temperatura.svg";
import Chuva from "../../assets/svg/Chuva.png";
import Vento from "../../assets/svg/Vento.svg";
import Umidade from "../../assets/svg/Agua.svg";
import IndiceUV from "../../assets/svg/Sol.svg";
import Context, { Climate } from "../../context/context";

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

const WeatherSegundary = () => {
  const { weatherData } = useContext(Context);

  if (!weatherData || !isClimate(weatherData)) {
    return <div>Dados climáticos inválidos ou não disponíveis</div>;
  }

  const {
    name,
    main: { temp, humidity },
    weather,
    clouds: { all: rain },
    wind: { speed: windSpeed},
  } = weatherData;

  const Climateinformations = [
    {
      img: Temperatura,
      description: "Sensação térmica",
      value: `${temp}°c`,
    },
    {
      img: Chuva,
      description: "Nuvens",
      value: `${rain}%`,
    },
    {
      img: Vento,
      description: "Velocidade do vento",
      value: `${windSpeed} m/s`,
    },
    {
      img: Umidade,
      description: "Umidade do ar",
      value: `${humidity}%`,
    },
  ];

  return (
    <div className="mx-3 mt-10 rounded-lg bg-[#16161F]">
      <section>
        <div className="flex flex-col items-start">
          {Climateinformations.map((info, index) => (
            <div
              className="mx-3 py-4 flex items-center justify-between border-b-2 border-[#60606013] w-full"
              key={index}
            >
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-3">
                  <img src={info.img} alt={info.description} />
                  <p className="text-white">{info.description}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-white mr-6">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeatherSegundary;
