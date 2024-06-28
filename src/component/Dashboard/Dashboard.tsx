import React from "react";
import Header from "../Header/Header";
import Presentation from "../../Presentation";
import Search from "../Search/Search";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="mt-40 flex flex-col items-center justify-center">
        <Presentation />
        <Search />
      </div>
    </div>
  );
};

export default Dashboard;
