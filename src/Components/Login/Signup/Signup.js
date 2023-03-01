import React from "react";
import style from "../LoginForm.module.css";
import Button from "../../Button";
const Signup = () => {
  return (
    <React.Fragment>
      <div className={style["form--inputs"]}>
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Repeat password" required />
      </div>
      <div className={style["login--container"]}>
        <Button message={"Create an new account"}></Button>
        <p>
          Already have an account? <span>Login instead</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signup;
