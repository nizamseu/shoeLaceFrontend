import { Button } from "@material-ui/core";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userInput, setUserInput] = useState({});
  const { createUser } = useAuth();
  const navigate = useNavigate();

  //onChange Hamndler

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    userInput[name] = value;
    setUserInput({ ...userInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.password !== userInput.password2) {
      alert("Not match");
      return;
    }
    createUser(userInput.email, userInput.password, navigate);

    e.target.reset();
    setUserInput({});
  };
  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <form className="modal" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Your Email"
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            placeholder="Your Password"
          />
          <br />
          <input
            type="password"
            name="password2"
            onChange={handleOnChange}
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <Button sx={{ width: "100%" }} variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
