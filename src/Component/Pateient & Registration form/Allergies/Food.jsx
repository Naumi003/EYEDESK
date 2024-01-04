import React, { useState } from "react";
import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import { Foodbutton } from "./Allergiesbutton";

function Food() {
  // const [input, setInput] = useState({
  //   index: 0,
  //   backgroundColor: "#1757C2",
  //   color: "white",
  // });
  return (
    <>
      <Typography
        component="h4"
        sx={{
          fontSize: { md: "0.75rem", sm: "0.50rem" },
          // fontSize: "14px",
          fontWeight: 600,
          color: "#373737",
          marginBottom: "5px",
          marginTop: "25px",
          // height:"35px"
        }}
      >
        Food Allergies
      </Typography>
      <Grid
        container
        sx={{
          // border: "1px solid gray",
          backgroundColor: "white",
          // height: { md: "50px", sm: "30px" },
          alignItems: "center",
          display: "flex",
          minHeight: "2.5rem",
          // justifyContent: "center",
        }}
      >
        <Foodbutton />
      </Grid>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "10px",
          // height:"10rem"
        }}
      >
        <TextField
          fullWidth
          label="Food Allergies Comment"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
      <Grid container marginTop={"10px"}>
        <Grid item md={3} sm={4}>
          <Typography
            component="h4"
            sx={{
              fontSize: "16px",
              // marginTop: "10px",
            }}
          >
            Comments:
          </Typography>
        </Grid>
        <Grid item md={9} sm={8}>
          <Box sx={{ width: "100%", maxWidth: "100%" }}>
            <TextField
              fullWidth
              label=""
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Food;
