import React from "react";
import LoginForm from "./LoginForm";
import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style["login--container"]}>
      <LoginForm />
    </div>
  );
};

export default Login;
