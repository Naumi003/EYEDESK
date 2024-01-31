import { Grid, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import React from "react";

function ButtonRetina({label}) {
  return (
    <>
      <Grid container>
        <Grid item md={6} sm={5}>
          <Typography
            component="h4"
            sx={{
              backgroundColor: "#02B801",
              fontSize: "0.9rem",
              fontWeight: "600px",
              borderRadius: "10px",
              color: "#fff",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
              width:"100%"
            }}
          >
             {label} <ArrowForwardOutlinedIcon />
          </Typography>
        </Grid>
        {/* <Grid item md={9} sm={7}></Grid> */}
      </Grid>
    </>
  );
}

export default ButtonRetina;
