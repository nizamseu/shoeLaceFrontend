import React ,{ useEffect, useState }from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';
import MyOrderCard from './MyOrderCard';



const deleteConfirrm =()=>{
    return Swal.fire({
       icon: 'error',
       title: 'Are you want DELETE It?',
       showCancelButton: true,
       confirmButtonText: 'Yes',
     })

}

const MyOrders = () => {
    const {user} =useAuth()
    const [userData,setUserData] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    // Load data 
    const email = user?.email;

useEffect(async()=>{
        const url=`https://intense-shore-62067.herokuapp.com/userOrders/${email}`
        await axios.get(url)
         .then(data=>{
             setUserData(data.data);
         }) 
    
},[email])


    const handleDelete =(id)=>{
        const url =`https://intense-shore-62067.herokuapp.com/deleteOrder/${id}`;
    
        deleteConfirrm()
        .then((result) => {
            if (result.isConfirmed) {
                fetch(url,{
                    method:'DELETE', 
                })
                .then(res=>res.json())
                .then(data=>{

                   if(data.deletedCount>0){
                       const restItem = userData.filter(item=>item._id !== id);
                       setUserData(restItem)
                   }
                })
                Swal.fire({
                    icon: 'error',
                    title: 'DELETED',
                    showConfirmButton: false,
                    timer: 1000
    
                }) 
            } 
          })
    }    
    


    return (
        <Box>
        <Typography sx={{my:3,marginLeft:'50px',fontWeight:'800'}} variant='h3'>MY ORDERS</Typography>
        {userData.length>0?
        <Container sx={{mx:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Grid container spacing={2}>
                    {
                        userData&&userData.map(item=><MyOrderCard
                            key={item._id}
                            item={item}
                            handleDelete={handleDelete}
                        ></MyOrderCard>)
                    }
            </Grid>
        </Container>:
            <h1 className='text-center text-danger'>There is No Order</h1>
        }
    </Box>
    );
};

export default MyOrders;