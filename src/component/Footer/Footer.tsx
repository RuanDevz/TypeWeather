import React from "react";
import logo from "../../assets/img/Logo.png";

const Footer = () => {
  return (
    <footer className="mx-3 mt-5 flex items-center justify-center gap-3 rounded-lg bg-[#16161F] p-5 font-primary font-medium">
      <img src={logo} alt="TypeWeather" />
      <h1 className="text-2xl text-white">TypeWeather </h1>
    </footer>
  );
};

export default Footer;
