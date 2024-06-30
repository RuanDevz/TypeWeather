import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Presentation from "../../Presentation";
import Search from "../Search/Search";
import Context from "../../context/context";
import { Cityapi } from "../../api/CityApi";
import { useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading'

const Dashboard = () => {
  const {setCities } = useContext(Context);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true)
        const response = await Cityapi();
        setCities(response);
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchCities();
  }, [setCities]);

  return (
    <div className="mt-0 lg:mt-20">
      <Header />
      <div className="mt-40 flex flex-col items-center justify-center">
        {loading && <Loading/>}
        <Presentation />
        <p className="text-[#696969] mt-10 text-center">Em caso de não localizar sua cidade, tente sem caracteres especiais</p>
        <Search />
      </div>
    </div>
  );
};

export default Dashboard;
