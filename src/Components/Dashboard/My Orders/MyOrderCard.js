import React from 'react';
import { Grid, Paper,Box, Rating, Avatar, imageListClasses, Button } from '@mui/material';

const MyOrderCard = ({item,handleDelete}) => {
    const {_id,status,title,img,name,email,photoURL,address,phone,description,brand,price} = item;

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} >
        <Paper  sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            overflow:'hidden',
            flexDirection:{xs:'column',sm:'column',md:'column',lg:'row'}
            }} elevation={10}>
            {/* product iamges  */}
           <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginRight:'10px'}}>
           
               <img
                    alt={name}
                    src={img}
                    style={{width: '100%'}}
                    />
           </Grid>
            {/* contents  */}
           <Box item xs={12} sm={12} md={12} lg={12} sx={{my:3,mx:2}}>
                <h4 className='font-monospace'>{title} </h4>
               <h5 className='text-secondary'>Brand: <span className='text-danger '>{brand}</span></h5>
               <h3 className='text-secondary'>Price : <span className='text-danger'>{price} TK</span> </h3>
               {
                   (description&&description.length>250)? <p>{description.slice(0,250)}...</p>
                   : <p>{description}</p>
                   
                   
               }
               <h5 className='text-secondary'>Delivery Address: <span className='text-dark'> {address}</span> </h5>
               <h4 className='text-secondary'>Status: <span className='text-danger'>{status}</span> </h4>
               <Button onClick={()=>{handleDelete(_id)}} variant='contained' color='error'>DELETE</Button>
           </Box>
        </Paper>
    </Grid>
    );
};

export default MyOrderCard;