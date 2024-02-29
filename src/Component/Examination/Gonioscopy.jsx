import { Box, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

function Gonioscopy() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid container paddingX={"1rem"} marginTop={"10px"}>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",

                //   m: 2,
              }}
            >
              Superior:
            </Typography>
          </Grid>
          <Grid item md={3} sm={4}>
            <FormControl sx={{ m: 1, minWidth: "95%" }} size="small">
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
          <Grid item md={3} sm={3}>
            <FormControl sx={{ m: 1, minWidth: "95%" }} size="small">
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
          <Grid item md={3} sm={3}>
            <FormControl sx={{ m: 1, minWidth: "95%" }} size="small">
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
        <Grid container>
          <Grid md={8} sm={8}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",

                //   m: 2,
              }}
            >
              Superior:
            </Typography>{" "}
          </Grid>
          <Grid md={4}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",

                //   m: 2,
              }}
            >
              Nasal:
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <FormControl sx={{ minWidth: "95%" }} size="small">
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
          <Grid md={4} sm={4}></Grid>
          <Grid item md={4} sm={4}>
            <FormControl sx={{ minWidth: "100%" }} size="small">
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
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <FormControl sx={{ minWidth: "95%" }} size="small">
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
          <Grid
            md={4}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CloseIcon style={{ fontSize: 40 }} />
          </Grid>
          <Grid item md={4} sm={4}>
            <FormControl sx={{ minWidth: "100%" }} size="small">
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
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <FormControl sx={{ minWidth: "95%" }} size="small">
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
          <Grid md={4} sm={4}></Grid>
          <Grid item md={4} sm={4}>
            <FormControl sx={{ minWidth: "100%" }} size="small">
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
        <Grid container paddingX={"1rem"} marginTop={"10px"}>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",

                //   m: 2,
              }}
            >
              Inferior:
            </Typography>
          </Grid>
          <Grid item md={3} sm={4}>
            <FormControl sx={{ m: 1, minWidth: "95%" }} size="small">
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
          <Grid item md={3} sm={3}>
            <FormControl sx={{ m: 1, minWidth: "95%" }} size="small">
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
          <Grid item md={3} sm={3}>
            <FormControl sx={{ m: 1, minWidth: "95%" }} size="small">
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

export default Gonioscopy;
