import React, { useState } from "react";
import './makeAdmin.css';
import axios from 'axios';
import { Button } from "@mui/material";
import { confirmAlert } from "../../../utility";
const MakeAdmin = () => {
const [adminEmail,setAdminEmail]=useState('')

  const HandleOnBlur =(e)=>{
    setAdminEmail(e.target.value)
  }

  const handleAdmin=async()=>{
    const email ={email:adminEmail}
    if(adminEmail.length>0){
      const result = await axios.put('http://localhost:5000/makeAdmin',email)
      if(result?.data?.modifiedCount>0){
          confirmAlert('Updated')
      }
    }
    
    
    
  }
  return (
    <div>
      <section className="wrapper">
        <div className="container">
            <div className="img__container">
            <img src="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="salad" class="img" /> 
            </div>   
        <div className="content">
           
                <h1 className="title">Make an Admin</h1>
                <input  onBlur={HandleOnBlur}  type="text" className="mail" placeholder="Your email address" name="mail" required />
                <Button onClick={handleAdmin} sx={{width:'100%',height:'50px',fontSize:'20px'}} variant='contained'  color="error" > Apply Now </Button>
                <p className="text">We won’t send you spam. Unsubscribe at any time.</p>
        </div>
        </div>
    </section>
    </div>
  );
};

export default MakeAdmin;
