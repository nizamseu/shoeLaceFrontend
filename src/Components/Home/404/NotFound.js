import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";


const NotFound = () => {
  const history = useHistory();
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <img height="400px" src='https://i.ibb.co/9hQQ4mn/download.png' alt="" />
      <Typography sx={{ my: "20px" }}>
        <Button onClick={() => history.goBack()} sx={{ mx: "20px" }} variant="contained">
          Back
        </Button>
        <Button onClick={() => history.push("/")} sx={{ mx: "20px" }} variant="contained">
          Home
        </Button>
      </Typography>
    </Box>
  );
};

export default NotFound;
