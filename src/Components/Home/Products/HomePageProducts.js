import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import ProductsCard from "./ProductsCard";

const HomePageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://intense-shore-62067.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data.reverse().slice(0, 6));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Box>
      <Typography
        sx={{ my: 3, marginLeft: "50px", fontWeight: "800" }}
        variant="h3"
      >
        Products
      </Typography>
      <Container
        sx={{
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          {products &&
            products.map((product) => (
              <ProductsCard key={product._id} product={product}></ProductsCard>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePageProducts;
