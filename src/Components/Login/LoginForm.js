import style from "./LoginForm.module.css";
import plantImage from "../Images/plant.jpg";

const LoginForm = () => {
  return (
    <form className={style["form--container"]}>
      <div>
        <h2>Login</h2>
      </div>
      <div className={style["form--toggle"]}>
        <div>Login</div>
        <div>Signup</div>
      </div>
      <div className={style["form--inputs"]}>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
