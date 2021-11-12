import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import ProductsCard from './ProductsCard';
const Products = () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading ]=useState(true)
    const [cart,setCart] =useState([])
  
    useEffect(() => {
        setIsLoading(true)
         axios.get('http://localhost:5000/products')
        .then(res=>{
            setProducts(res.data);
            setIsLoading(false)
        })
      
    }, []);
    console.log(products);

    if(isLoading){
        return<h1>Loading</h1>
    }
 
    return (
        <Box>
            <h1>Products</h1>
            <Container sx={{mx:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Grid container spacing={2}>
                   {
                       products && products.map(product=><ProductsCard
                        key = {product._id}
                        product={product}
                       ></ProductsCard>)
                   }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;