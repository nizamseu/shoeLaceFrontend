import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { google, user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography sx={{ mx: 3 }} variant="h6">
              Doctors
            </Typography>
          <Typography>{user.email && user.email}</Typography>
          </Box>

          <Link to={"/products"} color="inherit">
            Products
          </Link>
          <Link to={"/login"} color="inherit">
            Login
          </Link>
          <Link to={"/reg"} color="inherit">
            Register
          </Link>
          <Link to={"/dashboard"} color="inherit">
            Dashboard
          </Link>
          {user.email ? (
            <Button onClick={logOut} color="inherit">
              LogOut
            </Button>
          ) : (
            <Button onClick={google} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
