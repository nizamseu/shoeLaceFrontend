import { Paper, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth'
import axios from 'axios';
import './review.css';
import { Box } from '@mui/system';

const Review = () => {
    const {user} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data,e) => {
      data.name =user?.displayName;
      data.email=user?.email;
     
    axios.post('http://localhost:5000/review',data)
    .then(res=>{
      console.log(res);
    })
      e.target.reset()
  };
    return (
        <div>
        
        <Box className='reviewBox' sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Paper elevation={3}  sx={{py:1,px:5}}>
        <h2>Review</h2>
        <form className='review' onSubmit={handleSubmit(onSubmit)}>
        <input disabled defaultValue={user?.displayName} {...register("name")}  /> <br />
        <input disabled defaultValue={user?.email} {...register("email")} /> <br />
        <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder='Ratting' /> 
        {errors.rating && <p className='error'>Ratting Between 1 to 5</p>}<br />
        <textarea {...register("review", { required: true })} placeholder='Your Review' /> <br/>
      {errors.review && <p className='error'>This field is required</p>}
      
      <input className='btn' type="submit" />
    </form>
        </Paper>
        </Box>
    </div>
    );
};

export default Review;