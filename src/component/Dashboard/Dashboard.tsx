import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Presentation from "../../Presentation";
import Search from "../Search/Search";
import Context from "../../context/context";
import { Cityapi } from "../../api/CityApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {setCities } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await Cityapi();
        setCities(response);
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
        <p className="text-[#696969] mt-10">Em caso de não localizar sua cidade, tente sem caracteres especiais</p>
        <Search />
      </div>
    </div>
  );
};

export default Dashboard;
