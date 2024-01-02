import React, { useState } from 'react'
import { Box, Grid, Input, TextField, Typography } from "@mui/material";

function Contact() {
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
          fontSize: "16px",
          // marginBottom: "5px",
          marginTop: "25px",
        }}
        onClick={() => {
          const current = { ...input };
          current.index = 1;
          setInput(current);
        }}
      >
        Contact Allergies
      </Typography>
      <Grid
        container
        sx={{
          border: "1px solid gray",
          backgroundColor: "white",
          marginTop: "5px",
          height: "35px",
          alignItems: "center",
        }}
      >
        <Grid
          item
          md={2}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 6 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 6;
            setInput(current);
          }}
        >
          Alcohol
        </Grid>
        <Grid
          item
          md={2}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 7 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 7;
            setInput(current);
          }}
        >
          Latex
        </Grid>
        <Grid
          item
          md={2}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 8 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 8;
            setInput(current);
          }}
        >
          Betadine
        </Grid>
        <Grid
          item
          md={2}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 9 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 9;
            setInput(current);
          }}
        >
          Adhesive Tape
        </Grid>
        <Grid
          item
          md={2}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 10 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 10;
            setInput(current);
          }}
        >
          Tegaderm
        </Grid>
        <Grid
          item
          md={2}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            backgroundColor:
              input.index === 11 ? input.backgroundColor : "white",
            // letterSpacing: "-1px",
            // borderRight: "1px solid gray",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 11;
            setInput(current);
          }}
        >
          Transpore
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
          label="Contact Allergies Comment"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
    </>
  );
}

export default Contact