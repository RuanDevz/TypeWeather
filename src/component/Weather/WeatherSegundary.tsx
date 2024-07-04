import React, { useContext } from "react";
import Temperatura from "../../assets/svg/Temperatura.svg";
import Chuva from "../../assets/svg/Chuva.png";
import Vento from "../../assets/svg/Vento.svg";
import Umidade from "../../assets/svg/Agua.svg";
import Sol from "../../assets/svg/Sol.svg";
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

  const isMobile = window.innerWidth < 768;

  const {
    main: { temp, temp_max, temp_min, humidity },
    clouds: { all: rain },
    wind: { speed: windSpeed },
    sys,
    name,
  } = weatherData;

  const IndiceUV = 3;

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
    {
      img: Sol,
      description: "Índice UV",
      value: `${IndiceUV}`,
    },
  ];

  return (
    <div className="mt-10  rounded-lg bg-[#16161F] lg:mt-0 lg:w-full ">
      <section>
        {!isMobile ? (
          <p className="p-5 text-xl text-[#696969]">
            Detalhes do clima de hoje
          </p>
        ) : null}
        <div className="flex flex-col items-start">
          {Climateinformations.map((info, index) => (
            <div
              className="mx-3 flex w-full items-center justify-between border-b-2 border-[#60606013] py-2"
              key={index}
            >
              <div className="flex w-full justify-between py-3 lg:mr-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w[32px] h-[32px]"
                    src={info.img}
                    alt={info.description}
                  />
                  <p className="text-white lg:text-xl">{info.description}</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-6 text-white lg:text-xl">{info.value}</p>
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
