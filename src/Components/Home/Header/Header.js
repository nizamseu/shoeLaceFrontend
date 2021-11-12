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
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './heade.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

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
              ShoeLace
            </Typography>
          <Typography>{user.email && user.email}</Typography>
          </Box>

            <Box className='header'>
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

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
          {user.email ? (
            <Button onClick={logOut} color="inherit">
              LogOut
            </Button>
          ) : (
            <Link to={'/login'} color="inherit">
              Login
            </Link>
          )}
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
