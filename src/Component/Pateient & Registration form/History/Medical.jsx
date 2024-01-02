import React, { useState } from 'react'
import { Box, Grid, TextField, Typography } from "@mui/material";

function Medical() {
     const [input, setInput] = useState({
       index: 0,
       backgroundColor: "#1757C2",
       color: "white",
     });
     console.log(input);
  return (
    <>
      <Grid container columnSpacing={2} marginTop={"10px"}>
        <Grid item md={6} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "16px",
              // marginBottom: "10px",
            }}
          >
            Medical History
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            // label="First Name "
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
          />
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "16px",
              // marginBottom: "10px",
            }}
          >
            Family History
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            // label="First Name "
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Medical