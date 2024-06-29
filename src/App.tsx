import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Weather from "./component/Weather/Weather";
import Context, { City } from "./context/context";

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
