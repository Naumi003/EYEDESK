import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
// import { MyBtn } from "./MyBtn";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import PatientButton from "./PatientButton";
import Rod from "./Rod";

function Examination() {
  return (
    <Box>
      <Box paddingX={"2rem"}>
        <Grid container marginTop={"10px"}>
          <Grid item xs={4} md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item xs={6} md={4} sm={6}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                General Examination:
              </Typography>
            </Grid>
            {/* <Grid item xs={8} md={4} sm={6}> */}
            <ImmunizationButton
              Array={["Normal", "Abnormal"]}
              padding={"2px"}
            />
            {/* </Grid> */}
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item xs={6} md={4} sm={6}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                One Eyed:
              </Typography>
            </Grid>
            <ImmunizationButton Array={["YES", "NO"]} padding={"0px"} />
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item xs={6} md={4} sm={6}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                Squint Evaluation:
              </Typography>
            </Grid>
            <ImmunizationButton Array={["YES", "NO"]} padding={"0px "} />
          </Grid>
          <Grid container columnSpacing={"0.1rem"}>
            <Grid item xs={6} md={6} sm={6}>
              <Rod label={"R/OD"} isBtn={true} />
              <PatientButton />
            </Grid>
            <Grid item xs={6} md={6} sm={6}>
              <Rod label={"L/OS"} isBtn={true} />
              <PatientButton />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Examination;
