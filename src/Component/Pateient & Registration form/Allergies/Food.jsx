import React, { useState } from 'react'
import { Box, Grid, Input, TextField, Typography } from "@mui/material";

function Food() {
     const [input, setInput] = useState({
       index: 0,
       backgroundColor: "#1757C2",
       color: "white",
     });
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
          border: "1px solid gray",
          backgroundColor: "white",
          height: { md: "50px", sm: "30px" },
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          md={1.5}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: { md: "1px solid gray", sm: "1px solid gray" },
            borderBottom: { sm: "1px solid gray" },
            backgroundColor:
              input.index === 12 ? input.backgroundColor : "white",
            // justifyContent:"center"
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 12;
            setInput(current);
          }}
        >
          All Seafood
        </Grid>
        <Grid
          item
          md={1}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
            backgroundColor:
              input.index === 13 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 13;
            setInput(current);
          }}
        >
          Corn
        </Grid>
        <Grid
          item
          md={1.5}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
            backgroundColor:
              input.index === 14 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 14;
            setInput(current);
          }}
        >
          Egg
        </Grid>
        <Grid
          item
          md={1.5}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
            backgroundColor:
              input.index === 15 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 15;
            setInput(current);
          }}
        >
          Milk Protiens
        </Grid>
        <Grid
          item
          md={1.5}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            // borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
            backgroundColor:
              input.index === 16 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 16;
            setInput(current);
          }}
        >
          Peanuts
        </Grid>
        <Grid
          item
          md={1.5}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // borderTop:"1px solid gray",
            borderRight: "1px solid gray",
            borderBottom: { md: "1px solid gray" },
            backgroundColor:
              input.index === 17 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 17;
            setInput(current);
          }}
        >
          Shellfish Only
        </Grid>
        <Grid
          item
          md={2}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // borderTop: "1px solid gray",
            borderRight: "1px solid gray",
            borderBottom: { md: "1px solid gray" },
            backgroundColor:
              input.index === 18 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 18;
            setInput(current);
          }}
        >
          Soy Protien
        </Grid>
        <Grid
          item
          md={1.5}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // borderTop: "1px solid gray",
            borderBottom: { md: "1px solid gray" },
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 19 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 19;
            setInput(current);
          }}
        >
          Lactose
        </Grid>
        <Grid
          item
          md={1.5}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            backgroundColor:
              input.index === 20 ? input.backgroundColor : "white",
            // borderTop: "1px solid gray",
            borderLeft: "1px solid gray",
            borderRight: "1px solid gray",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 20;
            setInput(current);
          }}
        >
          Mushroom
        </Grid>
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

export default Food