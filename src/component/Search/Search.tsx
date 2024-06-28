import React, { useState } from "react";
import Input from "../Input/Input";
import { Weatherapi } from "../../api/WeatherAPI";
import Button from "../Button/Button";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const handleclick = (e: any) => {
    e.preventDefault()
    Weatherapi(search)
      .then((getWeather) => {
        console.log(getWeather);
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
        <div className="mt-10 flex items-center justify-center">
          <button onClick={handleclick} className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-24 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Buscar</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
