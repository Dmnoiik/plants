import React from "react";
import LoginForm from "./LoginForm";
import plantImage from "../Images/plant.jpg";
import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style["login--container"]}>
      <div className={style["login--header"]}>
        <h1 className={style["login--header_h1"]}>Welcome!</h1>
        <img
          src={plantImage}
          alt="Nothing to display"
          className={style["plant--img"]}
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
