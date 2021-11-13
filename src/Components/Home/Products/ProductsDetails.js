import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import BookingModal from './BookingModal';

const ProductsDetails = () => {
    const {id }= useParams();
    const [isLoading,setIsLoading ]=useState(true)
    const [product,setProduct] =useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  
    const {img,title,description,price,brand}= product

    useEffect(async() => {
        setIsLoading(true)
       await axios.get(`https://intense-shore-62067.herokuapp.com/product/${id}`)
       .then(res=>{
          setProduct(res.data);
       })
       setIsLoading(false)
    }, []);
console.log(product);

    if(isLoading){
        return<h1>Loading</h1>
    }

    return (
       <>
        <Container>
            <h1 >Products Details</h1>
            {
                product &&<Box>
                <Grid container spacing={5}>
                    {/* image  */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img width='100%' height='70%'  src={img} alt="" />
                    </Grid>
                    
                    {/* contents  */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant='h4' sx={{
                            fontFamily:'monospace',
                            fontWeight:'800',
                            color:'#002120',
                            
                            }}>
                            {title}
                        </Typography>
                        <Typography variant='h4' sx={{ my:3,color: '#969696'}}>
                          Brand: 
                          <span style={{ 
                              color:'#28161C',
                            fontWeight:'800',
                            }}> 
                            {brand}</span>
                        </Typography>
                        <Box sx={{my:1,fontSize:'26px', display:'flex'}}>
                        <h3 style={{color: '#969696',textDecoration:'line-through',marginRight:'15px'}}>TK {parseInt(price)+154}</h3>
                        <h3 style={{color:'#FF8066'}}> TK {price}</h3>
                        </Box>

                        <Typography sx={{textAlign:'justify'}} variant='h6'> 
                                {description}
                        </Typography>
                        <Button onClick={handleOpen} sx={{my:3}} variant='contained' color='error'>Purchase</Button>
                    </Grid>
                 
                </Grid>
            </Box>
            }

        </Container>
        <BookingModal
        product={product}
         openModal={openModal}
         handleClose={handleClose}
        >

        </BookingModal>
       </>
    );
};

export default ProductsDetails;