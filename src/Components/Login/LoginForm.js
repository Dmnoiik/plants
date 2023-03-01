import React, { useState, useReducer } from "react";
import style from "./LoginForm.module.css";
import Button from "../Button";
import Signup from "./Signup/Signup";

const reducer = (state, action) => {};

const LoginForm = () => {
  const [isActive, setNewIsActive] = useState(true);
  const [isSignupActive, setNewIsSignupActive] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    isActive: true,
    signupSelected: false,
  });

  const activeHandler = (event) => {
    if (event.target.classList.value === "LoginForm_active__k8aq0") {
      return;
    }
    setNewIsActive((prevState) => !prevState);
    setNewIsSignupActive(false);
  };

  const onSignupClick = () => {
    setNewIsSignupActive(true);
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
          disabled={isActive}
        >
          Login
        </button>
        <button
          onClick={(event) => {
            activeHandler(event);
            onSignupClick();
          }}
          className={!isActive ? style.active : ""}
        >
          Signup
        </button>
      </div>
      {isSignupActive ? (
        <Signup />
      ) : (
        <div className={style["form--inputs"]}>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
      )}
      {/* <div className={style["form--inputs"]}>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div> */}
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
