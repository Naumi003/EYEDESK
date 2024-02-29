import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

function Intraculor() {
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const todayEndOfTheDay = today.endOf("day");

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <style>{`.MuiInputBase-input{
        height:2rem;
        padding:0rem 0.5rem;
      }`}</style>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid
          container
          marginTop={"10px"}
          // paddingX={"1rem"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Value
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ width: "90%" }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
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
                    //   marginLeft: "10px",
                  }}
                >
                  mmHg
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <TimePicker
                  sx={{
                    width: "9.5rem",
                  }}
                  defaultValue={todayEndOfTheDay}
                  disableFuture
                  height={"0rem"}
                />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid
            item
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              align: "center",
            }}
          >
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Prism
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ minWidth: 50 }}>
              <FormControl fullWidth>
                <InputLabel></InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  // value={Select}
                  // label="Select"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
          <Grid item xs={8} md={7} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          // marginBottom={"10px"}
          // paddingX={"1rem"}
          columnSpacing={"1rem"}
          borderTop={"1px solid gray"}
          // borderBottom={"1px solid black"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Value
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ width: "90%" }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
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
                    //   marginLeft: "10px",
                  }}
                >
                  mmHg
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <TimePicker
                  sx={{
                    width: "9.5rem",
                  }}
                  defaultValue={todayEndOfTheDay}
                  disableFuture
                  height={"0rem"}
                />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid
            item
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              align: "center",
            }}
          >
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Prism
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ minWidth: 50 }}>
              <FormControl fullWidth>
                <InputLabel></InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  // value={Select}
                  // label="Select"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          // marginBottom={"10px"}
          // paddingX={"1rem"}
          columnSpacing={"1rem"}
          borderTop={"1px solid gray"}
          // borderBottom={"1px solid black"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Value
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ width: "90%" }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
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
                    //   marginLeft: "10px",
                  }}
                >
                  mmHg
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <TimePicker
                  sx={{
                    width: "9.5rem",
                  }}
                  defaultValue={todayEndOfTheDay}
                  disableFuture
                  height={"0rem"}
                />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid
            item
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              align: "center",
            }}
          >
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Prism
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ minWidth: 50 }}>
              <FormControl fullWidth>
                <InputLabel></InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  // value={Select}
                  // label="Select"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          // paddingX={"1rem"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Value
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ width: "90%" }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
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
                    //   marginLeft: "10px",
                  }}
                >
                  mmHg
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <TimePicker
                  sx={{
                    width: "9.5rem",
                  }}
                  defaultValue={todayEndOfTheDay}
                  disableFuture
                  height={"0rem"}
                />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid
            item
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              align: "center",
            }}
          >
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Prism
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ minWidth: 50 }}>
              <FormControl fullWidth>
                <InputLabel></InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  // value={Select}
                  // label="Select"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
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

export default Intraculor;
