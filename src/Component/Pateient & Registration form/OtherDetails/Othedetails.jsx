// import React from "react";
import { Box, Grid, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Buttonup from "./Buttonup";
import RadioBtn from "./RadioBtn";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Othedetails() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Box sx={{}}>
      <Grid
        container
        style={{}}
        // marginTop={"1rem"}
        // rowSpacing={"1rem"}
        paddingY={"1rem"}
        paddingX={"1rem"}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: 600,
              color: "#373737",
            }}
          >
            Patient Image
          </Typography>
          <Stack sx={{ width: "130px", height: "150px" }}>
            <Paper sx={{ width: "100%", height: "100%", padding: "0.8rem" }}>
              <Buttonup />
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#373737",
            }}
          >
            Blood Group
          </Typography>
          <Stack>
            <RadioBtn />
          </Stack>
        </Grid>
      </Grid>
      <Grid container paddingX={"1rem"} paddingBottom={"1rem"}>
        <Grid item md={6} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#373737",
            }}
          >
            Martial Status
          </Typography>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Single"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Married"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#373737",
            }}
          >
            One Eyed
          </Typography>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Typography
        component="h4"
        sx={{
          paddingLeft: "1rem",
          fontSize: "14px",
          fontWeight: 600,
          color: "#373737",
        }}
      >
        Emergency Contact
      </Typography>
      <Grid
        container
        paddingX={"1rem"}
        paddingY={"1rem"}
        columnSpacing={"1rem"}
      >
        <Grid item sm={4} md={3}>
          <FormControl sx={{ mt: 0, width: "100%" }}>
            <InputLabel id="demo-multiple-name-label" size="small">
              Relation
            </InputLabel>
            <Select
              sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
              // fullWidth
              labelId="demo-multiple-name-label"
              // id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              label="SELECT"
              MenuProps={MenuProps}
              size="small"
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4} md={4.5}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
            size="small"
          />
        </Grid>
        <Grid item sm={4} md={4.5}>
          <TextField
            fullWidth
            id="outlined-basic"
            label=" Number"
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
            size="small"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Othedetails;
