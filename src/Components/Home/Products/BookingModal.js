import React ,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import './BookingModal.css'
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import { confirmAlert, errorAlert } from '../../../utility';
import { Alert } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign:'center'
  };

const BookingModal = ({openModal,handleClose,product}) => {
  const {title,img}= product;
const {user} = useAuth()
const [error,setError] =useState(false)
  const { register,reset, handleSubmit,formState: { errors } } = useForm();
  
  const onSubmit = (data,e) =>{
    data.name =user?.displayName;
    data.email=user?.email;
    data.photoURL=user?.photoURL;
    data.status = 'pending';
    const newData ={...data,...product}
    axios.post('https://intense-shore-62067.herokuapp.com/order',newData)
    .then(res=>{
      if(res?.data?.insertedId){
        confirmAlert('Added');
        e.target.reset()
        handleClose()
        
      }
    })
     
   setError(true)
    

  };
 
// useEffect(() => {
//   reset(product)
// }, [reset]);

    return (
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{my:1}}>
              <img width='100%' height='200px' src={img} alt="" />
            </Box>
           {/* {error && <Alert severity="error">Already Added or Something Wrong</Alert>} */}
          <Box >
          <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
          
          <input disabled defaultValue={user?.displayName} {...register("name")} /> <br />
          <input  disabled defaultValue={user?.email} {...register("email")}  /> <br />
          <input  {...register("phone")} placeholder="Your Phone Number" /> <br />
         
          <textarea style={{ width:'100%',height:'80px'}} {...register("address",{ required: true})} placeholder='Address' /> <br />
          {errors.address && <span style={{color:'red'}}>Requred</span>} <br />
          <Button sx={{width:'100%'}} variant='contained' type="submit" >Purchase Now</Button>
          </form>
          </Box>
        </Box>
      </Modal>
    );
};

export default BookingModal;