import React, { useState } from 'react'
import { Box, Grid, Input, TextField, Typography } from "@mui/material";

function Drug() {
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
          border: "1px solid gray",
          backgroundColor: "white",
          marginTop: "5px",
          height: "35px",
          alignItems: "center",
        }}
      >
        <Grid
          item
          md={2.4}
          sm={2.6}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 1 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 1;
            setInput(current);
          }}
        >
          Antimicrobial Agents
        </Grid>
        <Grid
          item
          md={2.4}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 2 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 2;
            setInput(current);
          }}
        >
          Antifungal Agents
        </Grid>
        <Grid
          item
          md={2.4}
          sm={2.4}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 3 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 3;
            setInput(current);
          }}
        >
          Antiviral Agents
        </Grid>
        <Grid
          item
          md={2.4}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            // letterSpacing: "-1px",
            borderRight: "1px solid gray",
            backgroundColor:
              input.index === 4 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 4;
            setInput(current);
          }}
        >
          Nsaids
        </Grid>
        <Grid
          item
          md={2.4}
          sm={2}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            backgroundColor:
              input.index === 5 ? input.backgroundColor : "white",
            // letterSpacing: "-1px",
            // borderRight: "1px solid gray",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 5;
            setInput(current);
          }}
        >
          Eye Drops
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
          label="Drug Allergies Comments"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
    </>
  );
}

export default Drug