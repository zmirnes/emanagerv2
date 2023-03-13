import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
    </Routes>
  );
};

export default App;
