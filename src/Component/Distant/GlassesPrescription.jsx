import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function GlassesPrescription() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        height={"100vh"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <Box width={"70%"}>
          <Grid container marginBottom={"1rem"} columnSpacing={"1rem"}>
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
                  Type of lens
                </Grid>
                <Grid item md={10} sm={10}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Select</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Select"
                      onChange={handleChange}
                    >
                      <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
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
                  IPD
                </Grid>
                <Grid item md={10} sm={10}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Select</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Select"
                      onChange={handleChange}
                    >
                      <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container columnSpacing={"1rem"}>
            <Grid item md={4} sm={3}>
              <Grid container>
                <Grid
                  item
                  md={3}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  Lens Material
                </Grid>
                <Grid item md={9} sm={10}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Select</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Select"
                      onChange={handleChange}
                    >
                      <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} sm={3}>
              <Grid container>
                <Grid
                  item
                  md={4}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Lens Tint
                </Grid>
                <Grid item md={8} sm={10}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Select</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Select"
                      onChange={handleChange}
                    >
                      <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} sm={3}>
              <Grid container>
                <Grid
                  item
                  md={6}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Frame Material
                </Grid>
                <Grid item md={6} sm={10}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Select</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Select"
                      onChange={handleChange}
                    >
                      <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container marginTop={"1rem"} columnSpacing={"2rem"}>
            <Grid item md={1} sm={2}>
              <Typography component="h4"> Advice:</Typography>
            </Grid>
            <Grid item md={11} sm={10}>
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

export default GlassesPrescription;
