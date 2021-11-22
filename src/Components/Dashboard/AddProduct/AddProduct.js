import { Paper, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import "../Review/review.css";
import { Box } from "@mui/system";
import { confirmAlert } from "../../../utility";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    axios
      .post("https://intense-shore-62067.herokuapp.com/addProduct", data)
      .then((res) => {
        confirmAlert("Product Added");
      });
    e.target.reset();
  };
  return (
    <div>
      <Box
        className="reviewBox"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ py: 1, px: 5 }}>
          <h2>Add A New Product</h2>
          <form className="review" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("title", { required: true, minLength: 30 })}
              placeholder="Product Title"
            />{" "}
            <br />
            {errors.title && <p className="error">Minimum 30 Charachter</p>}
            <input
              {...register("img", { required: true })}
              placeholder="URL"
            />{" "}
            <br />
            {errors.img && <p className="error">This field is required</p>}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                },
              }}
            >
              <input
                style={{ width: "100%", marginRight: "10px" }}
                type="number"
                {...register("price", { min: 10, max: 10000 })}
                placeholder="Price"
              />{" "}
              <br />
              {errors.price && (
                <span className="error">Price Between 10 to 99999</span>
              )}
              <input
                style={{ width: "100%" }}
                type="text"
                {...register("brand", { required: true })}
                placeholder="Brand Name"
              />{" "}
              <br />
              {errors.brand && <span className="error">Brand is Requre</span>}
            </Box>
            <textarea
              {...register("description", { required: true }, { min: 150 })}
              placeholder="Description"
            />{" "}
            <br />
            {errors.description && (
              <p className="error">Minimum 150 Character</p>
            )}
            <input className="btn" value="Add Now" type="submit" />
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default AddProduct;
