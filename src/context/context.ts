// context.ts
import { createContext, Dispatch, SetStateAction } from "react";

export type Climate = {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  sys:{
    country: string
  }
  weather: {
    description: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
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
}

const initialContext: ContextType = {
  weatherData: [],
  cities: [],
  setCities: () => {},
  setWeatherData: () => {},
};

export const Context = createContext<ContextType>(initialContext);

export default Context;
