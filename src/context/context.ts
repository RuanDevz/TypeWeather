import { createContext, Dispatch, SetStateAction } from "react";

export type Climate = {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number; 
    grnd_level: number; 
    pressure: number; 
    sea_level: number; 
  };
  sys:{
    country: string,
    type: number
  };
  weather: {
    description: string;
    id: number;
    main: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number; 
    gust: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  sunrise: number;
  sunset: number;
  timezone: number;
  visibility: number;
};

export type City = {
  id: number;
  nome: string; 
  country: string;
}

export interface ContextType {
  weatherData: Climate[];
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
  setWeatherData: Dispatch<SetStateAction<Climate[]>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const initialContext: ContextType = {
  weatherData: [],
  cities: [],
  setCities: () => {},
  setWeatherData: () => {},
  inputValue: "", 
  setInputValue: () => {}, 
};

const Context = createContext<ContextType>(initialContext);

export default Context;
