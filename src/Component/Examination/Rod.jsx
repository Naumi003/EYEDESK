import { Grid, Typography } from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import { Label } from "@mui/icons-material";

function Rod({ label,isBtn }) {
  if(isBtn){
    
  }
  return (
    <>
      <Grid container sx={{ backgroundColor: "#1565c0", marginTop: "10px" }}>
        <Grid item md={2}></Grid>
        <Grid
          item
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography>{label}</Typography>
        </Grid>
        <Grid
          item
          md={2}
          sx={{
            // display: "flex",
            // alignItems: "start",
            // flexDirection: "row",
            justifyContent: "center",
            // marginBottom: "-0.07rem",
            marginTop: "-0.2rem",
          }}
        >
          {isBtn && <ImmunizationButton Array={["NORMAL"]} padding={"0px"} />}
        </Grid>
      </Grid>
    </>
  );
}

export default Rod;
