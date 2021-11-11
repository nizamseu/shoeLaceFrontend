import { Paper, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth'
import axios from 'axios';
import '../Review/review.css';
import { Box } from '@mui/system';

const AddProduct = () => {
  
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data,e) => {
console.log(data);
    axios.post('http://localhost:5000/addProduct',data)
    .then(res=>{
      console.log(res);
    })
      e.target.reset()
  };
    return (
        <div>
        
        <Box className='reviewBox' sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Paper elevation={3}  sx={{py:1,px:5}}>
        <h2>Add A New Product</h2>
        <form className='review' onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("title",{ required: true })}  placeholder='Product Title' /> <br />
        {errors.title && <p className='error'>This field is required</p>}

        <input  {...register("img",{ required: true })} placeholder='URL' /> <br />
        {errors.img && <p className='error'>This field is required</p>}

       <Box sx={{display:'flex'}}>
       <input style={{width:'50%',marginRight:'10px'}} type="number" {...register("price", { min: 10, max: 10000 })} placeholder='Price' /> 
        {errors.price && <p className='error'>Price  Between 10 to 99999</p>}<br />
        <input style={{width:'50%'}} type="text" {...register("brand", { required: true })} placeholder='Brand Name' /> 
        {errors.brand && <p className='error'>Brand is Requre</p>}<br />
       </Box>

        <textarea {...register("description", { required: true })} placeholder='Description' /> <br/>
      {errors.description && <p className='error'>This field is required</p>}
      
      <input className='btn' value='Add Now' type="submit" />
    </form>
        </Paper>
        </Box>
    </div>
    );
};

export default AddProduct;