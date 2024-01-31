import { Grid } from "@mui/material";
import React from "react";
import Pressure from "./Pressure";

function Maingrid() {
  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <Pressure />
        </Grid>
        <Grid item md={6}>
          <Pressure />
        </Grid>
      </Grid>
    </>
  );
}

export default Maingrid;
