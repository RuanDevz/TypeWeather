import React, { useContext, useState } from "react";
import { Input } from "@chakra-ui/react";
import logo from "../../assets/img/LogoWeather.png";
import Context, { Climate } from "../../context/context";
import { Weatherapi } from "../../api/WeatherAPI";
import { FaSearch } from "react-icons/fa";
import Loading from "../../component/Loading/Loading";

const WeatherHeader = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setWeatherData } = useContext(Context);

  const handleclick = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const getWeather: Climate[] = await Weatherapi(input);
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
      {loading && <Loading>Previsões</Loading>}
      <header className="relative flex justify-around pt-10 font-primary">
        <div className="mx-2 rounded-lg bg-[#1E1E29] p-5">
          <img className="w-7" src={logo} alt="logo" />
        </div>
        <Input
          placeholder="Buscar Local"
          className="w-[271px] rounded-lg bg-[#1E1E29] indent-3 text-white focus:outline-none lg:w-[500px]"
          id="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="absolute right-0 mr-6 mt-5 flex items-center text-xl text-white">
          <FaSearch
            onClick={handleclick}
            className="lg: mr-7 cursor-pointer text-[#8FB2F5]"
          />
        </div>
      </header>
    </div>
  );
};

export default WeatherHeader;
