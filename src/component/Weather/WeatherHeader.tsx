import React, { useContext, useState } from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
import Context, { Climate, Cordenates } from "../../context/context";
import { FiveDaysForecast, GetCoordinates, WeatherApi } from "../../api/WeatherAPI";
import { FaSearch } from "react-icons/fa";
import Loading from "../../component/Loading/Loading";

const WeatherHeader = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setWeatherData, setGetCordenates, setForecastData, inputValue } = useContext(Context);

  const handleClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const coordinates: Cordenates[] = await GetCoordinates(input);
      setGetCordenates(coordinates);
      console.log(coordinates);

      if (coordinates.length > 0) {
        const { lat, lon } = coordinates[0];
        const forecast = await FiveDaysForecast(lat, lon);
        setForecastData(forecast);
        console.log(forecast);
      } else {
        console.log("Nenhuma coordenada encontrada");
      }
    } catch (err) {
      console.log("Erro ao obter coordenadas:", err);
    }

    try {
      const getWeather: Climate[] = await WeatherApi(input);
      setWeatherData(getWeather);
      console.log(getWeather);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar o clima:", error);
      setError("Não temos previsão para sua cidade");
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loading>Carregando...</Loading>}
      <header className="relative flex justify-around pt-10 font-primary">
        <div className="mx-2 rounded-lg bg-[#1E1E29] p-5">
          <img className="w-7" src={logo} alt="logo" />
        </div>
        <Input
          placeholder="Buscar Local"
          className="w-[271px] rounded-lg bg-[#1E1E29] indent-3 text-white focus:outline-none lg:w-[500px]"
          id="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div onClick={handleClick} className="absolute right-0 mr-6 mt-5 flex items-center text-xl text-white">
          <FaSearch
            
            className="lg:mr-7 cursor-pointer text-[#8FB2F5]"
          />
        </div>
      </header>
    </div>
  );
};

export default WeatherHeader;
