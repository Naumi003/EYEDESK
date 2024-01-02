import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";

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

const Appointment = () => {
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
  const [value, setValue] = React.useState(null);
  return (
    <div style={{}}>
      <Typography
        component="h4"
        sx={{
          fontSize: "14px",
          position: "relative",
          left: "10px",
          marginTop: "5PX",
          marginBottom: "5px",
        }}
      >
        Type
      </Typography>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={12} lg={12}>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              // size="small"
            >
              <Grid container>
                <Grid item sx={{ position: "relative", left: "10px" }} lg={6}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Walk In"
                    // size="small"
                  />
                </Grid>
                <Grid item sx={6} lg={6}>
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Appointment"
                    // size="small"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Typography
        component="h4"
        sx={{
          fontSize: "14px",
          position: "relative",
          left: "10px",
          marginTop: "5PX",
          marginBottom: "5px",
        }}
      >
        Appointment Date And Time
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={1}
          md={1}
          lg={11}
          sx={{ position: "relative", left: "10px" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={1} sx={{ minWidth: "240px" }}>
              <DateTimePicker
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                size="small"
                value={value}
                onChange={setValue}
                referenceDate={dayjs("2022-04-17T15:30")}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container columnSpacing={1} paddingX={1}>
        <Grid item xs={12} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              position: "relative",
              left: "10px",
              marginTop: "5PX",
              marginBottom: "5px",
            }}
          >
            Location
          </Typography>
          <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel id="demo-multiple-name-label" size="small">
              XYZ EYE HOSPITAL
            </InputLabel>
            <Select
              sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="XYZ EYE HOSPITAL" />}
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

        <Grid item xs={12} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              position: "relative",
              left: "10px",
              marginTop: "5PX",
              marginBottom: "5px",
            }}
          >
            Consultant
          </Typography>
          <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel id="demo-multiple-name-label" size="small">
              Neil Down
            </InputLabel>
            <Select
              sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Neil Down" />}
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
      </Grid>
      <Grid container columnSpacing={1} paddingX={1}>
        <Grid item xs={12} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              position: "relative",
              left: "10px",
              marginTop: "5PX",
              marginBottom: "5px",
            }}
          >
            Appointment Types
          </Typography>
          <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel id="demo-multiple-name-label" size="small">
              Review
            </InputLabel>
            <Select
              sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="XYZ EYE HOSPITAL" />}
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

        <Grid item xs={12} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "12px",
              position: "relative",
              left: "10px",
              marginTop: "5PX",
              marginBottom: "5px",
            }}
          >
            Appointment Categories
          </Typography>
          <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel id="demo-multiple-name-label" size="small">
              Select Appointment Categories
            </InputLabel>
            <Select
              sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="NEIL DOWN" />}
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
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <h4 className="naumi">Reserved Slot For 26 Aug,2023</h4>
        </Grid>
      </Grid>
    </div>
  );
};

export default Appointment;
