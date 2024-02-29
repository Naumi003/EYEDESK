import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

function Extraocular() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={5} marginTop={"10px"}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Uniocular Movements
            </Typography>
          </Grid>
          <Grid item md={7} marginTop={"10px"}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Full"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Restricted"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Overaction"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={5}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Binocular Movements
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Grid container>
              <Grid item md={6}>
                <ImmunizationButton Array={["Full"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Restricted"]} />
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
          <Grid item md={10}>
            <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
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
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={5}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Squint
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Grid container>
              <Grid item md={6}>
                <ImmunizationButton Array={["Trophia"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Phoria"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={5}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Phoria
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Grid container>
              <Grid item md={6}>
                <ImmunizationButton Array={["Esophoria (EP)"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Exophoria(X)"]} />
              </Grid>
            </Grid>
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

export default Extraocular;
