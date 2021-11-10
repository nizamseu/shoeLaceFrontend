import { Button } from "@material-ui/core";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const { loginWithEmail } = useAuth();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    userInput[name] = value;
    setUserInput({ ...userInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginWithEmail(userInput.email, userInput.password);
    e.target.reset();
  };

  console.log(userInput);
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <form className="modal" onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleOnChange}
            placeholder="Your Email"
          />{" "}
          <br />
          <input
            name="password"
            onChange={handleOnChange}
            placeholder="Your Password"
          />{" "}
          <br />
          <br />
          <br />
          <Button sx={{ width: "100%" }} variant="contained" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
