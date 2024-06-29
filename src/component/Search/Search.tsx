import React, { useState } from "react";
import Input from "../Input/Input";
import { Weatherapi } from "../../api/WeatherAPI";
import Error from '../Error/Error'
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleclick = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const sanitizedSearch = search.replace(/[^\w\s]/gi, ''); 

    await Weatherapi(sanitizedSearch)
      .then((getWeather) => {
        console.log(getWeather);
        setLoading(false);
        navigate('/Weather')
      })
      .catch((error) => {
        console.error("Erro ao buscar o clima:", error);
        setError('Não temos previsão para sua cidade')
        setLoading(false)
      });
  };

  return (
    <div>
      <div>
      </div>
      <form className="mt-14">
        <Input
          placeholder="Buscar Local"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="Search"
        />
        <div className="mt-10 flex items-center flex-col justify-center lg:mt-20">
          {error && <p className="text-red-600 font-bold text-base pb-10">{error}</p>}
          <button
            onClick={handleclick}
            className="rounded-full bg-indigo-500 px-24 py-3 font-bold text-white shadow-lg shadow-indigo-500/50 hover:animate-pulse hover:brightness-110 lg:px-32"
          >
            {loading ? "Aguarda..." : "Buscar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
