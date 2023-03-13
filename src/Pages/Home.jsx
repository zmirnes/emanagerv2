import React from "react";
import Employees from "../Components/Employees";
import Header from "../Components/Header";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <Employees />
    </div>
  );
};

export default Home;
