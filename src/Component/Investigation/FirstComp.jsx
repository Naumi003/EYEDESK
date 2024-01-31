import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function FirstComp({ label }) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={6} sm={2} md={2}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  value="Advised"
                  control={<Radio />}
                  label="Advised"
                />
              </Grid>
              <Grid itemxs={12} sm={12} md={6}>
                <FormControlLabel
                  value="Perform"
                  control={<Radio />}
                  label="Perform"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={5} md={5}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label={label}
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "0.7rem",
            minWidth: "1rem",
          }}
        />
      </Grid>
      <Grid item xs={8} sm={4} md={3}>
        <FormControl sx={{ display: "flex", alignItems: "center" }}>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="L" control={<Radio />} label="L" />
            <FormControlLabel value="Both" control={<Radio />} label="Both" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4} sm={1} md={2}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon sx={{ color: "red" }} />}
          sx={{ border: "none" }}
        ></Button>
      </Grid>
    </Grid>
    // </Grid>
  );
}

export default FirstComp;
