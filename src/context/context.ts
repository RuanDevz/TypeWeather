// context.ts
import { createContext, Dispatch, SetStateAction } from "react";

export interface City {
  id: number;
  nome: string; 
  country: string;
  description: string;
  clouds: number
  humidity: number,
  temp: number
  temp_max: number,
  temp_min: number
  speed: number

}

export interface ContextType {
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
}

const initialContext: ContextType = {
  cities: [],
  setCities: () => {},
};

export const Context = createContext<ContextType>(initialContext);

export default Context;
