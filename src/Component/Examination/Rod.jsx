import { Grid, Typography } from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import { Label } from "@mui/icons-material";

function Rod({ label, isBtn }) {
  if (isBtn) {
  }
  return (
    <>
      <Grid container sx={{ backgroundColor: "#1565c0", color: "#fff", marginTop: "10px" }}>
        <Grid item md={2}></Grid>
        <Grid
          item
          md={7.5}
          sm={8}
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
          sm={2}
          sx={{
            // display: "flex",
            // alignItems: "start",
            // flexDirection: "row",
            justifyContent: "center",
            marginBottom: "0.3rem",
            marginTop: "rem",
            // marginLeft: "5px",
          }}
        >
          {isBtn && <ImmunizationButton Array={["NORMAL"]} padding={"0px"} />}
        </Grid>
      </Grid>
    </>
  );
}

export default Rod;
