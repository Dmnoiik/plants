import React, { useState } from "react";
import style from "./LoginForm.module.css";
import plantImage from "../Images/plant.jpg";

const LoginForm = () => {
  const [isActive, setNewIsActive] = useState(true);
  const activeHandler = () => {
    setNewIsActive((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className={style["form--container"]}>
      <div>
        <h2 className={style["form--heading"]}>Login</h2>
      </div>
      <div className={style["form--toggle"]}>
        <button
          onClick={activeHandler}
          className={isActive ? style.active : ""}
        >
          Login
        </button>
        <button>Signup</button>
      </div>
      <div className={style["form--inputs"]}>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <button className={style["form--login"]}>Login</button>
    </form>
  );
};

export default LoginForm;
