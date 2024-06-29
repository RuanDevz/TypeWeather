import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Presentation from "../../Presentation";
import Search from "../Search/Search";
import Context from "../../context/context";
import { Cityapi } from "../../api/CityApi";

const Dashboard = () => {
  const { cities, setCities } = useContext(Context);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await Cityapi();
        setCities(response);
        console.log(response)
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    };

    fetchCities();
  }, [setCities]);

  return (
    <div className="mt-0 lg:mt-20">
      <Header />
      <div className="mt-40 flex flex-col items-center justify-center">
        <Presentation />
        <Search />
      </div>
    </div>
  );
};

export default Dashboard;
