import React, { useState } from "react";
import Input from "../Input/Input";
import { Weatherapi } from "../../api/WeatherAPI";
import Button from "../Button/Button";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleclick = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await Weatherapi(search)
      .then((getWeather) => {
        console.log(getWeather);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar o clima:", error);
      });
  };

  return (
    <div>
      <form className="mt-14">
        <Input
          placeholder="Buscar Local"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="Search"
        />
        <div className="mt-10 flex items-center justify-center lg:mt-32">
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
