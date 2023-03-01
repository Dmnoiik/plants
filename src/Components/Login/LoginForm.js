import style from "./LoginForm.module.css";
const LoginForm = () => {
  return (
    <form>
      <div className={style["input--container"]}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={style["input--container"]}>
        <label>Password</label>
        <input type="password" />
      </div>
    </form>
  );
};

export default LoginForm;
