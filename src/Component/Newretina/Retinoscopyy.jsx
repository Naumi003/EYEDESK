import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

import ButtonRetina from "./ButtonRetina";

function Retinoscopyy() {
  return (
    <>
      <Box
        height={"100vh"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={"90%"}>
          <ButtonRetina label={"RETINOSCOPY (R)"} />
          <Grid container>
            <Grid item md={5} sm={4}></Grid>
            <Grid item md={5} sm={6}>
              <TextField
                // fullWidth
                id="outlined-basic"
                // label="Mobile Number"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0.7rem",
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid item md={2} sm={2}></Grid>
          </Grid>
          <Grid container marginBottom={"1px"}>
            <Grid item md={2} sm={1}></Grid>
            <Grid item md={4} sm={4}>
              <TextField
                // fullWidth
                id="outlined-basic"
                // label="Mobile Number"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0.7rem",
                  marginTop: "2rem",
                }}
              />
            </Grid>
            <Grid item md={2.5} sm={2}>
              <Typography component="h4" sx={{ marginTop: "2rem" }}>
                <AddTwoToneIcon style={{ fontSize: 60 }} />
              </Typography>
            </Grid>
            <Grid item md={3.5} sm={5}>
              <TextField
                // fullWidth
                id="outlined-basic"
                // label="Mobile Number"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0.7rem",
                  marginTop: "2rem",
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={5} sm={4}></Grid>
            <Grid item md={5} sm={6}>
              <TextField
                // fullWidth
                id="outlined-basic"
                // label="Mobile Number"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0.7rem",
                  marginTop: "2rem",
                }}
              />
            </Grid>
            <Grid item md={2} sm={2}></Grid>
          </Grid>
          <Grid container marginTop={"2rem"}>
            <Grid item md={6} sm={6}>
              <Grid container>
                <Grid
                  item
                  md={2}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  VA
                </Grid>
                <Grid item md={10} sm={10}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      // marginTop: "2rem",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sm={6}>
              <Grid container>
                <Grid
                  item
                  md={2}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  NA
                </Grid>
                <Grid item md={10} sm={10}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      // marginTop: "2rem",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container marginTop={"2rem"} columnSpacing={"1rem"}>
            <Grid item md={6} sm={6}>
              <Grid container>
                <Grid
                  item
                  md={2}
                  sm={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  Drug Used
                </Grid>
                <Grid item md={10} sm={9}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      // marginTop: "2rem",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sm={6}>
              <Grid container>
                <Grid
                  item
                  md={2}
                  sm={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  At Distance
                </Grid>
                <Grid item md={10} sm={9}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      // marginTop: "2rem",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container marginTop={"2rem"}>
            <Grid item md={2} sm={2}>
              <Typography component="h4"> Comments:</Typography>
            </Grid>
            <Grid item md={10} sm={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                // label="Mobile Number"
                variant="outlined"
                size="large"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0.7rem",
                  // marginTop: "2rem",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Retinoscopyy;
