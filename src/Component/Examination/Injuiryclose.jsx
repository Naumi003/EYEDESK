import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";

function Injuiryclose() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={
            {
            //   width: "50%",
            }
          }
        >
          <Grid container>
            <Grid item md={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Nature of injuiry
              </Typography>
            </Grid>
            <Grid item md={7}>
              <ImmunizationButton Array={["Open Globe"]} padding={"0px "} />
              <ImmunizationButton Array={["Close Globe"]} padding={"0px "} />
            </Grid>
          </Grid>
          <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
            <Grid item md={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Close Globe injuries
              </Typography>
            </Grid>
            <Grid item md={7}>
              <Grid container>
                <Grid item={3}>
                  <ImmunizationButton Array={["Constution"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Lamellar Laceration"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Superficial Foreign Body"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Perforating"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Mixed"]} padding={"0px "} />
                </Grid>
                <ImmunizationButton
                  Array={[
                    "External (Limited to Bulbar Conjuvtiva,Sclera,Cornea)",
                  ]}
                  padding={"0px "}
                />
                <ImmunizationButton
                  Array={[
                    "Anterior Segment (Involving Structure Internal to Cornea AC,lens,Posterior Capsules)",
                  ]}
                  padding={"0px "}
                />
                <ImmunizationButton
                  Array={["Structure Posterior Lens"]}
                  padding={"0px "}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
            <Grid item md={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Rupture
              </Typography>
            </Grid>
            <Grid item md={7}>
              <Grid container>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Endophthalmitis"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Panophthalmitis"]}
                    padding={"0px "}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
          <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
            {/* <Grid item md={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                IOFB
              </Typography>
            </Grid> */}
            <Grid item md={7}>
              {/* <Grid container>
                <Grid item={3}>
                  <ImmunizationButton Array={["Pellet"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Stone"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Vegitative"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Non Metallic"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Glass"]} padding={"0px "} />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
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
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Injuiryclose;
