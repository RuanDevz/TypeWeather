import { createContext, Dispatch, SetStateAction } from "react";

// Definindo a interface da cidade
interface City {
  id: number;
  nome: string;
  country: string;
}

// Definindo a interface para o contexto
interface ContextType {
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
}

// Valor inicial para o contexto
const initialContext: ContextType = {
  cities: [],
  setCities: () => {},
};

// Criando o contexto
export const Context = createContext<ContextType>(initialContext);

export default Context
