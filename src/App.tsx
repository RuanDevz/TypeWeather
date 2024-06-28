import React, { useState } from "react";
import Header from "./component/Header/Header";
import Presentation from "./Presentation";
import Search from "./component/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Weather from "./component/Weather/Weather";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Weather" element={<Weather/>}/>
      </Routes>
    </Router>
  );
};

export default App;
