import {
  Box,
  Button,
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

function Lens() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={2} marginTop={"10px"}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Nature
            </Typography>
          </Grid>
          <Grid item md={10} marginTop={"10px"}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Clear"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Cataract"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Psuedophakia"]} />
              </Grid>
              <Grid md={4} marginTop={"10px"}>
                <ImmunizationButton Array={["Aphakia"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Position
            </Typography>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Central"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Decentered"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Subluxated"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Size
            </Typography>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={3}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Swollen"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Absorbed"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Micro"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"} marginTop={"15px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Locs Grading
            </Typography>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid md={4}>
                <Grid container>
                  <Grid
                    item
                    md={6}
                    sx={{
                      display: "flex",
                      flexBasis: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      NS
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Box sx={{ minWidth: 50 }}>
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
              </Grid>
              <Grid md={4}>
                <Grid container>
                  <Grid
                    item
                    md={6}
                    sx={{
                      display: "flex",
                      flexBasis: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      NS
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Box sx={{ minWidth: 50 }}>
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
              </Grid>
              <Grid md={4}>
                <Grid container>
                  <Grid
                    item
                    md={6}
                    sx={{
                      display: "flex",
                      flexBasis: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      NS
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Box sx={{ minWidth: 50 }}>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Stack>
          <Button variant="contained">ADD LENS DIAGRAM</Button>
        </Stack>
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
          <Grid item xs={8} md={4.5} sm={8}>
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

export default Lens;
