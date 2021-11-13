import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './heade.css'



const Header = () => {
  const { google, user, logOut } = useAuth();
  return (
    <Navbar className='d-flex align-items-center justify-content-center' bg="light" expand="lg">
    <Container className='' fluid>
      <Navbar.Brand >ShoeLacE</Navbar.Brand>
      <Navbar.Brand >{user?.displayName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          className='header'
        >
          <Link to={'/'}>Home</Link>
        
          <Link to={'/products'}>Products</Link>
          <Link to={'/reg'}>REG</Link>
          <Link to={'/about'}>About</Link>
          {
          user?.email?<div>
            <Link to={'/dashboard'}>Dashboard</Link>
            <button onClick={logOut}>Log Out</button>
          </div>
          : <Link to={'/Login'}>Login</Link>
          }
         
           
          
        </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
