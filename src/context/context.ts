// context.ts
import { createContext, Dispatch, SetStateAction } from "react";

export interface City {
  id: number;
  nome: string; 
  country: string;
  description: string; 
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
