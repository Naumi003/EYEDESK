import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { SystemicButton } from "./Button";

function Systematic() {
  const [input, setInput] = useState({
    index: 0,
    backgroundColor: "#1757C2",
    color: "white",
  });
  console.log(input);
  return (
    <>
      <Box sx={{ marginTop: "5px" }}>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#373737",
            marginBottom: "5px",
          }}
        >
          Systemic History
        </Typography>{" "}
        <Grid
          container
          sx={{
            height: "auto",
            minHeight: "2.5rem",
            // backgroundColor: "white",
          }}
        >
          <SystemicButton />
        </Grid>
        {/* </Grid> */}
      </Box>
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

export default Systematic;
