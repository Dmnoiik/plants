import React, { useState } from "react";
import LoginForm from "./LoginForm";
import style from "./Login.module.css";
import Home from "../Home/Home";
const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const submitHandler = () => {
    setIsLogged(true);
    console.log(isLogged);
  };
  return (
    <React.Fragment>
      {isLogged ? (
        <Home />
      ) : (
        <div className={style["login--container"]}>
          <LoginForm onSubmit={submitHandler} />
        </div>
      )}
      {/* <div className={style["login--container"]}>
      <LoginForm onSubmit={submitHandler} />
    </div> */}
    </React.Fragment>
  );
};

export default Login;
