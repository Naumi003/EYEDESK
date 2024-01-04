import React, { useState } from 'react'
import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import { Contactbutton } from './Allergiesbutton';

function Contact() {
    //  const [input, setInput] = useState({
    //    index: 0,
    //    backgroundColor: "#1757C2",
    //    color: "white",
    //  });
  return (
    <>
      <Typography
        component="h4"
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#373737",
          // marginBottom: "5px",
          marginTop: "25px",
        }}
        // onClick={() => {
        //   const current = { ...input };
        //   current.index = 1;
        //   setInput(current);
        // }}
      >
        Contact Allergies
      </Typography>
      <Grid
        container
        sx={{
          // border: "1px solid gray",
          backgroundColor: "white",
          marginTop: "5px",
          minHeight: "2.5rem",
          // height: "35px",
          alignItems: "center",
        }}
      >
        <Contactbutton />
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