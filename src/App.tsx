import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Weather from "./component/Weather/Weather";
import Context, { City, Climate, Cordenates } from "./context/context";
import Footer from "./component/Footer/Footer";

const App = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [weatherData, setWeatherData] = useState<Climate[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [getCordenates, setGetCordenates] = useState<Cordenates[]>([]);
  const [forecastData, setForecastData] = useState<any[]>([])

  return (
    <Context.Provider value={{ 
      cities, 
      setCities, 
      weatherData, 
      setWeatherData, 
      inputValue, 
      setInputValue, 
      getCordenates, 
      setGetCordenates, 
      forecastData, 
      setForecastData 
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </Router>
      <Footer />
    </Context.Provider>
  );
};

export default App;
