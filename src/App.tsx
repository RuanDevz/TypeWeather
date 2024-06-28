import React from "react";
import Header from "./component/Header/Header";
import Input from "./component/Input/Input";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col mt-40">
        <h1 className="font-primary text-xl font-medium text-white">
          Boas vindas ao{" "}
          <span className="font-bold text-[#8FB2F5]">TypeWeather</span>
        </h1>
        <p className="text-gray-200">
          Escolha um local para ver a previsão do tempo
        </p>
        <form className="mt-14">
          <Input id="Search"/>
        </form>
      </div>
    </div>
  );
};

export default App;
