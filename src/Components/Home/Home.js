import React, { useState } from "react";
import MainNavigation from "./MainNavigation/MainNavigation.js";
import style from "./Home.module.css";
import AddPlantButton from "../Plants/AddPlantButton.js";
import NewPlantModal from "../Plants/NewPlantModal.js";

const Home = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  return (
    <div className={style["home--page"]}>
      <MainNavigation></MainNavigation>
      <div className={style["home--page__container"]}>
        {isModalDisplayed ? (
          ""
        ) : (
          <AddPlantButton
            text={"Add new plant"}
            onClick={() => setIsModalDisplayed(true)}
          />
        )}

        {isModalDisplayed ? (
          <NewPlantModal onSubmit={() => setIsModalDisplayed(false)} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
