import React, { useState } from "react";
import Header from "./component/Header/Header";
import Presentation from "./Presentation";
import Search from "./component/Search/Search";

const App = () => {

  return (
    <div>
      <Header />
      <div className="mt-40 flex flex-col items-center justify-center">
        <Presentation/>
        <Search/>
      </div>
    </div>
  );
};

export default App;
