import React, { useContext, useEffect, useState } from "react";
import { Cityapi } from "../../api/CityApi";
import Context from "../../context/context";

type InputProps = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const Input = ({ id, onChange, value, placeholder }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const {cities, setCities} = useContext(Context)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    console.log(cities)

    const suggestions = [
      "Porto Alegre",
      "Sao paulo",
    ].filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(suggestions);
    onChange(event);
  };

  const handleSuggestionClick = (value: string) => {
    setInputValue(value);
    setSuggestions([]);
  };

  return (
    <div>
      <label htmlFor={id}></label>
      <input
        placeholder="Buscar Local"
        className="w-[311px] rounded-lg bg-[#1E1E29] px-1 py-3 indent-3 text-white focus:outline-none lg:w-[500px]"
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 mx-auto w-[311px] rounded-b-md bg-[#3B3B54] shadow-lg lg:w-[500px]">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 font-normal text-white hover:bg-[#464664]"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
