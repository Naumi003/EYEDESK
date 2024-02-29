import {
  Box,
  Grid,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

function Iris() {
  const [alignment, setAlignment] = React.useState({
    NVI: "false",
    PI: "false",
  });

  const handleChange = (key, value) => {
    console.log({ [key]: !alignment[key] });
    setAlignment({ ...alignment, [key]: value });
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={6} marginTop={"10px"}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Shape
            </Typography>
          </Grid>
          <Grid item md={6} marginTop={"10px"}>
            <Grid container>
              <Grid item md={6}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Defects"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={6}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Neovascularisation(NVI)
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.NVI}
                  exclusive
                  onChange={(e) => handleChange("NVI", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor: alignment.NVI === "false" ? "#1565c0" : "#fff",
                      color: alignment.NVI === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.NVI === "true" ? "#1565c022" : "#1565c0",
                        color: alignment.NVI === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor: alignment.NVI === "true" ? "#1565c0" : "#fff",
                      color: alignment.NVI === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.NVI === "false" ? "#1565c022" : "#1565c0",
                        color: alignment.NVI === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {/* <Grid md={6}>
                <ImmunizationButton Array={["YES"]} padding={"0px "} />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={4}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Synechiae
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["NO"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Anterior"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Posterior"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={6}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Peripheral Iridotomy(PI)
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={6}>
                {" "}
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.PI}
                  exclusive
                  onChange={(e) => handleChange("PI", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor: alignment.PI === "false" ? "#1565c0" : "#fff",
                      color: alignment.PI === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.PI === "true" ? "#1565c022" : "#1565c0",
                        color: alignment.PI === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor: alignment.PI === "true" ? "#1565c0" : "#fff",
                      color: alignment.PI === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.PI === "false" ? "#1565c022" : "#1565c0",
                        color: alignment.PI === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"15px"}
          // width={"50%"}
          width={"100%"}
          marginBottom={"10px"}
        >
          <Grid item xs={4} md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                //   marginTop: "10px",
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
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Stack
            sx={{
              width: "200px",
              height: "50px",
              marginBottom: "10px",
              // display: "flex",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                height: "100%",
                padding: "0.5rem",
                // display: "flex",
              }}
            >
              <Buttonup />
            </Paper>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Iris;
