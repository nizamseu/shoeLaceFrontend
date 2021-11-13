import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import '../Register/reg.css'
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
    <Container>
      <h1 className='text-center my-3 text-info'>Login Page</h1>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <form className='reg' onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleOnChange}
            placeholder="Your Email"
          />
          <br />
          <input
            name="password"
            onChange={handleOnChange}
            placeholder="Your Password"
          />
          <br />

          <Button sx={{ width: "100%" }} variant="contained" type="submit">
            Login
          </Button>
          <Link style={{textDecoration:'none',fontSize:'23px'}} to={'/reg'}>Create a New Account</Link> <br />
        </form>
      </Box>
    </Container>
  );
};

export default Login;
