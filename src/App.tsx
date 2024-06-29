import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Weather from "./component/Weather/Weather";
import Context from "./context/context";

const App = () => {
  type City = {
    id: number;
    nome: string;
    country: string;
    description: string
  }

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
