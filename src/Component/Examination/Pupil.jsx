import {
  Box,
  Grid,
  Paper,
  Slider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

function Pupil() {
  const [alignment, setAlignment] = React.useState({
    Rapd: "false",
  });

  const handleChange = (key, value) => {
    setAlignment({ ...alignment, [key]: value });
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem", marginTop: "10px" }}>
        <Grid container marginBottom={"10px"}>
          <Grid item md={2} sm={2} marginTop={"10px"}>
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
          <Grid item md={10} sm={10} marginTop={"10px"}>
            <Grid container>
              <Grid item md={3} sm={3}>
                <ImmunizationButton Array={["Round"]} />
              </Grid>
              <Grid md={3} sm={3}>
                <ImmunizationButton Array={["Eccentric"]} />
              </Grid>
              <Grid md={3} sm={3}>
                <ImmunizationButton Array={["Irregular"]} />
              </Grid>
              <Grid md={3} sm={3}>
                <ImmunizationButton Array={["Oval"]} />
              </Grid>
              <Grid md={3} sm={4} marginTop={"10px"}>
                <ImmunizationButton Array={["Polycoria"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          // paddingX={"1rem"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2} sm={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Pupil Size
            </Typography>
          </Grid>
          <Grid item md={6} sm={6}>
            <Box sx={{ width: "100%" }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Grid container>
              <Grid item md={8} sm={8}>
                <TextField
                  //   label="Size"
                  id="outlined-size-small"
                  //   defaultValue="Small"
                  size="small"
                />
              </Grid>
              <Grid
                item
                md={4}
                sm={4}
                sx={{
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "bottom",
                  flexDirection: "row",
                }}
              >
                <Typography
                  component="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  mm
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid i   tem md={5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
              <TimePicker
                sx={{
                  width: "14rem",
                }}
                defaultValue={todayEndOfTheDay}
                disableFuture
                height={"0rem"}
              />
            </DemoItem>
          </LocalizationProvider>
        </Grid> */}
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={6}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Reaction to light Direct
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Sluggish"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Absent"]} />
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
              }}
            >
              Reaction to light Consensual
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Sluggish"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Absent"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={8}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Afferent pupillary defect(RAPD)
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Rapd}
                  exclusive
                  onChange={(e) => handleChange("Rapd", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor: alignment.Rapd === "false" ? "#1565c0" : "#fff",
                      color: alignment.Rapd === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Rapd === "true" ? "#1565c022" : "#1565c0",
                        color: alignment.Rapd === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor: alignment.Rapd === "true" ? "#1565c0" : "#fff",
                      color: alignment.Rapd === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Rapd === "false" ? "#1565c022" : "#1565c0",
                        color: alignment.Rapd === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {/* <Grid md={4}>
              <ImmunizationButton Array={["Absent"]} padding={"0px "} />
            </Grid> */}
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

export default Pupil;
