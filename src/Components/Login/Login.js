import React, { useState } from "react";
import LoginForm from "./LoginForm";
import style from "./Login.module.css";
import Home from "../Home/Home";
const Login = (props) => {
  const submitHandler = () => {
    props.onSubmit();
  };

  return (
    <div className={style["login"]}>
      <div className={style["login--container"]}>
        <LoginForm onSubmit={submitHandler} />
      </div>
    </div>
  );
};

export default Login;
