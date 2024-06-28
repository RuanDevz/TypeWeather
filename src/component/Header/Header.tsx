import React from "react";
import Logo from "../../assets/img/Logo.png";
const Header = () => {
  return (
    <div>
      <header className="font-primary flex items-center justify-center gap-3 pt-10">
        <img src={Logo} alt="Weather" />
        <h1 className="font-base font-bold text-[#D9D9D9]">TypeWeather</h1>
      </header>
    </div>
  );
};

export default Header;
