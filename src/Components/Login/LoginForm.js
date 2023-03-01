import React, { useState } from "react";
import style from "./LoginForm.module.css";
import plantImage from "../Images/plant.jpg";
import Button from "../Button";

const LoginForm = () => {
  const [isActive, setNewIsActive] = useState(true);

  const activeHandler = (event) => {
    if (event.target.classList.value === "LoginForm_active__k8aq0") {
      return;
    }
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
        <button
          onClick={activeHandler}
          className={!isActive ? style.active : ""}
        >
          Signup
        </button>
      </div>
      <div className={style["form--inputs"]}>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <div className={style["login--container"]}>
        <Button message={"Login"}></Button>
        <p>
          Not a member? <span>Sign up</span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
