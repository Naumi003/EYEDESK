import React, { useState } from "react";
import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import { Drugbutton } from "./Allergiesbutton";

function Drug() {
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
        }}
      >
        Drug Allergies
      </Typography>
      <Grid
        container
        sx={{
          backgroundColor: "white",
          marginTop: "5px",
          minHeight: "2.5rem",
          alignItems: "center",

          // marginBottom:"10px"
          // rowGap:"2px"
        }}
        // columnSpacing={1}
      >
        <Drugbutton />
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
          label="Drug Allergies Comments"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
    </>
  );
}

export default Drug;
