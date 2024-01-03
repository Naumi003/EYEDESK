import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";

function Opthalmic() {
  const [input, setInput] = useState({
    index: 0,
    backgroundColor: "#1757C2",
    color: "white",
  });
  console.log(input);
  return (
    <>
      <Typography
        component="h4"
        sx={{
          // fontSize: "16px",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#373737",
        }}
      >
        Opthalmic History
      </Typography>
      <Grid
        container
        sx={{
          border: "1px solid gray",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          md={1}
          sm={1.71}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            borderRight: "1px solid gray",
            justifyContent: "center",
            backgroundColor:
              input.index === 1 ? input.backgroundColor : "white",
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 1;
            setInput(current);
          }}
        >
          Glaucoma
        </Grid>
        <Grid
          item
          md={2.88}
          sm={3}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            borderRight: "1px solid gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: input.index === 2 && input.backgroundColor,
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 2;
            setInput(current);
          }}
        >
          Retinal Detachment
        </Grid>
        <Grid
          item
          md={1}
          sm={1}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid gray",
            backgroundColor: input.index === 3 && input.backgroundColor,
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 3;
            setInput(current);
          }}
        >
          Glass
        </Grid>
        <Grid
          item
          md={1.88}
          sm={1.71}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid gray",
            backgroundColor: input.index === 4 && input.backgroundColor,
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 4;
            setInput(current);
          }}
        >
          Eye Disease
        </Grid>
        <Grid
          item
          md={1.88}
          sm={1.71}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid gray",
            backgroundColor: input.index === 5 && input.backgroundColor,
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 5;
            setInput(current);
          }}
        >
          Eye Surgery
        </Grid>
        <Grid
          item
          md={1}
          sm={1}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid gray",
            backgroundColor: input.index === 6 && input.backgroundColor,
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 6;
            setInput(current);
          }}
        >
          Uveitis
        </Grid>
        <Grid
          item
          md={1.88}
          sm={1.71}
          sx={{
            fontSize: { md: "0.75rem", sm: "0.50rem" },
            fontWeight: "600",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            //   borderRight: "1px solid gray",
            backgroundColor: input.index === 7 && input.backgroundColor,
          }}
          onClick={() => {
            const current = { ...input };
            current.index = 7;
            setInput(current);
          }}
        >
          Retinal Laser
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
          label="History Comment"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
    </>
  );
}

export default Opthalmic;
