import React, { useState } from "react";
import './makeAdmin.css';
import axios from 'axios';
import { Button, Container, Grid, Paper } from "@mui/material";
import { confirmAlert } from "../../../utility";
import { Box } from "@mui/system";
const MakeAdmin = () => {
const [adminEmail,setAdminEmail]=useState('')

  const HandleOnBlur =(e)=>{
    setAdminEmail(e.target.value)
  }

  const handleAdmin=async()=>{
    const email ={email:adminEmail}
    if(adminEmail.length>0){
      const result = await axios.put('https://intense-shore-62067.herokuapp.com/makeAdmin',email)
      if(result?.data?.modifiedCount>0){
          confirmAlert('Updated')
      }
    }
    
    
    
  }
  return (
    <div>
      <Container  sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Paper elevation='24'>
          <Box >
            <img width='100%' height='250px' src= 'https://i.ibb.co/WPS0xQp/revolt-164-6w-VEHf-I-unsplash.jpg' /> 
          </Box>   
        
        <div>
                <h3  className="my-4 text-center text-info fst-italic">Make an Admin</h3>
                <input  onBlur={HandleOnBlur}  type="text" className="mail" placeholder="Your email address" name="mail" required />
                <Button onClick={handleAdmin} sx={{width:'100%',height:'50px',fontSize:'20px'}} variant='contained'  color="error" > Apply Now </Button>
                
        </div>
       </Paper>
    </Container>
    </div>
  );
};

export default MakeAdmin;
