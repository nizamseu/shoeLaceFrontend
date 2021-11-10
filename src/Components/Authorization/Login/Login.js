import { Button } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const { loginWithEmail } = useAuth();

const history = useHistory();
  const  location = useLocation();




  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    userInput[name] = value;
    setUserInput({ ...userInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginWithEmail(userInput.email, userInput.password,history,location);
    e.target.reset();
  };

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
