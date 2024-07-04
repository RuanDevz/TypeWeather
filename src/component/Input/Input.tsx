import React, { useContext, useState } from "react";
import Context, { ContextType } from "../../context/context";

type InputProps = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const Input = ({ id, onChange, value, placeholder }: InputProps) => {
  const { inputValue, setInputValue } = useContext<ContextType>(Context);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { cities } = useContext(Context);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredCities = cities.filter((city) =>
      city.nome.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(filteredCities.map((city) => city.nome));
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
        placeholder={placeholder}
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
