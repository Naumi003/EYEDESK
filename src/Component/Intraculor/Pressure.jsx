import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ButtonRetina from "../Newretina/ButtonRetina";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const today = dayjs();
const tomorrow = dayjs().add(1, "day");
const todayEndOfTheDay = today.endOf("day");
function Pressure() {
  return (
    <>
      <style>{`.MuiInputBase-input{
        height:2rem;
        padding:0rem 0.5rem;
      }`}</style>
      <Box
        height={"100vh"}
        width={"100%"}
        sx={{
          //   display: "flex",
          //   justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box width={"100%"}>
          <Grid container paddingX={"1rem"}>
            <Grid item md={12} marginBottom={"10px"}>
              <ButtonRetina label={"INTRAOCULAR PRESSURE (IOP)"} />
            </Grid>
            <Grid
              container
              marginTop={"10px"}
              paddingX={"1rem"}
              columnSpacing={"1rem"}
            >
              <Grid item md={4}>
                <Box sx={{ width: "auto" }}>
                  <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Grid>
              <Grid item md={3}>
                <Grid container>
                  <Grid item md={6}>
                    <TextField
                      //   label="Size"
                      id="outlined-size-small"
                      //   defaultValue="Small"
                      size="small"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
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
                        marginLeft:"10px"
                      }}
                    >
                      mmHg
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={5}>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid container marginTop={"30px"} paddingX={"2rem"}>
            <Grid item md={2} sm={2}>
              <Typography component="h4"> comments:</Typography>
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

export default Pressure;
