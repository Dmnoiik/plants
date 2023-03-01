import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation.js";
import style from "./Home.module.css";
import AddPlantButton from "../Plants/AddPlantButton.js";

const Home = () => {
  return (
    <div className={style["home--page"]}>
      <MainNavigation></MainNavigation>
      <div className={style["home--page__container"]}></div>
    </div>
  );
};

export default Home;
