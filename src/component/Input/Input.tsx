import React, { useState } from "react";

type InputProps = {
  id: string;
};

const Input = ({ id }: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const suggestions = [
        "Porto Alegre - RS - Brasil",
        "São Paulo - SP - Brasil",
        "Rio de Janeiro - RJ - Brasil",
        "Belo Horizonte - MG - Brasil",
        "Salvador - BA - Brasil",
        "Brasília - DF - Brasil",
        "Curitiba - PR - Brasil",
        "Fortaleza - CE - Brasil",
        "Recife - PE - Brasil",
        "Manaus - AM - Brasil",
        "Belém - PA - Brasil",
        "Goiânia - GO - Brasil",
        "Florianópolis - SC - Brasil",
        "Vitória - ES - Brasil",
        "João Pessoa - PB - Brasil",
        "Campo Grande - MS - Brasil",
        "Cuiabá - MT - Brasil",
        "Natal - RN - Brasil",
        "Teresina - PI - Brasil",
        "Aracaju - SE - Brasil",
        "Porto Velho - RO - Brasil",
        "Macapá - AP - Brasil",
        "Palmas - TO - Brasil",
        "Boa Vista - RR - Brasil",
    ].filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(suggestions);
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
        className="w-[311px] rounded-lg bg-[#1E1E29] px-1 py-3 indent-3 text-white focus:outline-none"
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 mx-auto w-[311px] rounded-b-md bg-[#3B3B54] shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer text-white font-normal px-4 py-2 hover:bg-[#464664]"
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
