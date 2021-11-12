import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const [isLoading,setIsLoading ]=useState(true)

  
    useEffect(() => {
        setIsLoading(true)
         axios.get('http://localhost:5000/review')
        .then(res=>{
            setReviews(res.data);
            setIsLoading(false)
        })
      
    }, []);
 


    if(isLoading){
        return<h1>Loading</h1>
    }
    return (
        <Box>
            <Typography sx={{my:3,marginLeft:'50px',fontWeight:'800'}} variant='h3'>All Reviews</Typography>
            <Container sx={{mx:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Grid container spacing={2}>
                        {
                            reviews&&reviews.map(item=><ReviewCard
                                key={item._id}
                                item={item}
                            ></ReviewCard>)
                        }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;