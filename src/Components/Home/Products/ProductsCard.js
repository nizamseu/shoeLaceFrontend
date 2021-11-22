import { Paper, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { _id, title, price, brand, description, img } = product;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper sx={{ margin: "10px" }} elevation={10}>
        {/* product iamges  */}
        <Box>
          <img width="100%" height="250px" src={img} alt="" />
        </Box>
        {/* products contents  */}
        <Box sx={{ padding: "20px" }}>
          <h3 style={{ color: "#00C9A7" }}> {brand} </h3>
          <h4> {title.toUpperCase().slice(0, 20)} </h4>
          <Box sx={{ display: "flex" }}>
            <h3
              style={{
                color: "#969696",
                textDecoration: "line-through",
                marginRight: "15px",
              }}
            >
              TK {parseInt(price) + 154}
            </h3>
            <h3 style={{ color: "#FF8066" }}> TK {price}</h3>
          </Box>
          <p>{description.slice(0, 150)}</p>
          <Link style={{ textDecoration: "none" }} to={`/details/${_id}`}>
            <Button variant="contained" color="error">
              Details
            </Button>
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProductsCard;
