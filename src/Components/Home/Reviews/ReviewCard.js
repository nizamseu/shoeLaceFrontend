import { Grid, Paper,Box, Rating, Avatar } from '@mui/material';
import React from 'react';

const ReviewCard = ({item}) => {
    const {name,email,rating,photoURL,review} = item;
    return (
        <Grid item xs={12} sm={12} md={6} lg={6} >
            <Paper  sx={{
                margin:'10px',
                padding:'20px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:{xs:'column',sm:'column',md:'row'}
                }} elevation={10}>
                {/* product iamges  */}
               <Box sx={{marginRight:'25px'}}>
               
                   <Avatar
                        alt={name}
                        src={photoURL}
                        sx={{ width: 150, height: 150 }}
                        />
                   <h3>{name} </h3>
                   <p style={{marginTop:'-20px',color:'gray'}}>{email}</p>
               </Box>
                {/* contents  */}
               <Box>
                    <h4 style={{color:'gray'}}>Review</h4>
                    <p style={{textAlign:'justify'}}>{review.slice(0,250)} </p>
                    <Rating name="read-only" value={rating} readOnly />
               </Box>
            </Paper>
        </Grid>
    );
};

export default ReviewCard;