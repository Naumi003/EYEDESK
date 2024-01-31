import { Box, Grid } from "@mui/material";
import React from "react";
import FirstComp from "./FirstComp";

function Investigation() {
  return (
    <>
      <Box
        height={"100vh"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={"90%"} height={"75%"}>
          <Grid container sx={{ marginBottom: "10px" }}>
            <FirstComp label={"Topography"} />
          </Grid>
          <Grid container sx={{ marginBottom: "10px" }}>
            <FirstComp label={"Pachymetry"} />
          </Grid>
          <Grid container sx={{ marginBottom: "10px" }}>
            <FirstComp label={"Axial length"} />
          </Grid>
          <Grid container sx={{ marginBottom: "10px" }}>
            <FirstComp label={"Clinical Photography"} />
          </Grid>
          <Grid>
            <FirstComp label={"CPCV"} />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Investigation;
