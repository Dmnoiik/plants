import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const submitHandler = () => {
    setIsLogged(true);
    console.log(isLogged);
  };
  return (
    <div className="App">
      {!isLogged ? <Login onSubmit={submitHandler} /> : <Home />}
    </div>
  );
}

export default App;
