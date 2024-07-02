// Search.tsx
import React, { useContext, useState, useEffect } from "react";
import { ContextType } from "../../context/context";
import Input from "../Input/Input";
import { Weatherapi } from "../../api/WeatherAPI";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";
import Context, { Climate } from "../../context/context";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const { inputValue, setInputValue } = useContext<ContextType>(Context);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setWeatherData } = useContext(Context);
  
  useEffect(() =>{
    console.log(inputValue)
  },[])
  const handleclick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      const getWeather: Climate[] = await Weatherapi(inputValue);
      setWeatherData(getWeather);
      console.log(getWeather)
      setLoading(false);
      navigate("/Weather");
    } catch (error) {
      console.error("Erro ao buscar o clima:", error);
      setError("Não temos previsão para sua cidade");
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="mt-14">
        <Input
          placeholder="Buscar Local"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="Search"
        />
        <div className="mt-10 flex flex-col items-center justify-center lg:mt-20">
          {error && (
            <p className="pb-10 text-base font-bold text-red-600">{error}</p>
          )}
          <button
            onClick={handleclick}
            className="rounded-full bg-indigo-500 px-24 py-3 font-bold text-white shadow-lg shadow-indigo-500/50 hover:animate-pulse hover:brightness-110 lg:px-32"
            disabled={loading}
          >
            {loading ? "Aguarda..." : "Buscar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
