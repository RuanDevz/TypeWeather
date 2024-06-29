import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Weather from "./component/Weather/Weather";

// Definindo a interface da cidade
interface City {
  id: number;
  name: string;
  country: string;
}

interface ContextType {
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
}

const initialContext: ContextType = {
  cities: [],
  setCities: () => {},
};

const Context = createContext<ContextType>(initialContext);

const App = () => {
  const [cities, setCities] = useState<City[]>([]);

  return (
    <Context.Provider value={{ cities, setCities }}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
