import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Weather from "./component/Weather/Weather";
import Context, {City, Climate } from "./context/context";

const App = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [weatherData, setWeatherData] = useState<Climate[]>([]);

  return (
    <Context.Provider value={{ cities, setCities, weatherData, setWeatherData }}>
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
