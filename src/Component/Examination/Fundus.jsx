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
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

function Fundus() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Media
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            <TextField
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              PVD
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            {/* <TextField
            //   label="Size"
            id="outlined-size-small"
            //   defaultValue="Small"
            size="small"
          /> */}
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Optic Disc,Size
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            {/* <TextField
            //   label="Size"
            id="outlined-size-small"
            //   defaultValue="Small"
            size="small"
          /> */}
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Cup/Disc Ratio(CD)
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            <TextField
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Optic Disc
            </Typography>
          </Grid>
          {/* <Grid item md={5} sm={4}></Grid> */}
          <Grid item md={10}>
            <TextField
              fullWidth
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Blood Vessels
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            <TextField
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container marginTop={"15px"} columnSpacing={"1rem"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Macula
            </Typography>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Foveal Reflex"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Hard Exudates"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Microaneurysm"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Hemorrhages"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["subrential Hemorrhages"]} />
              </Grid>
              <Grid md={2}>
                <ImmunizationButton Array={["Scar"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Atrophonic Area"]} />
              </Grid>
              <Grid md={5}>
                <ImmunizationButton Array={["Pigment Alteration"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Drusen"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Subrential Fluid"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Crystoid"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Thickening"]} />
              </Grid>
              <Grid md={5}>
                <ImmunizationButton Array={["Cotton Wool Spots"]} />
              </Grid>
              <Grid md={7}>
                <ImmunizationButton Array={["Pigment Epithrlial Detachment"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Altered Foveal Reflex"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Vascular Abnormalities"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Pigmentry Charges"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Epiretinal Membrane"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["FTMH"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Lamellar Hole"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["ILM Striae"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["White Dots"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Yellow Flecks"]} />
              </Grid>
              <Grid md={5}>
                <ImmunizationButton Array={["Cheery Red Spot"]} />
              </Grid>
              <Grid md={6}>
                <ImmunizationButton Array={["Whitening"]} />
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
              Foveal Reflex
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Present"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Absent"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Dull"]} />
              </Grid>
              <Grid item md={12} marginTop={"10px"}>
                <TextField
                  fullWidth
                  //   label="Size"
                  id="outlined-size-small"
                  //   defaultValue="Small"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Vitreous
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            <TextField
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Retinal Detachment
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            <TextField
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Peripheral Lesions
            </Typography>
          </Grid>
          <Grid item md={5} sm={4}>
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
          <Grid item md={5}>
            <TextField
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnSpacing={"1rem"}
        >
          <Grid
            item
            md={2}
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
              Fundus
            </Typography>
          </Grid>
          {/* <Grid item md={5} sm={4}></Grid> */}
          <Grid item md={10}>
            <TextField
              fullWidth
              //   label="Size"
              id="outlined-size-small"
              //   defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
        <Stack marginTop={"10px"}>
          <Button variant="contained">ADD FUNDUS DIAGRAM</Button>
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

export default Fundus;
