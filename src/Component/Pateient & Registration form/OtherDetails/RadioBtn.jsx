import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Stack } from "@mui/material";

export default function RadioBtn() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Grid container>
          <Grid item sm={6} md={3}>
            <Stack flexDirection={"column"}>
              <FormControlLabel value="O+" control={<Radio />} label="O+" />
              <FormControlLabel value="A+" control={<Radio />} label="A+" />
            </Stack>
          </Grid>
          <Grid item sm={6} md={3}>
            <Stack flexDirection={"column"}>
              <FormControlLabel value="O-" control={<Radio />} label="O-" />
              <FormControlLabel value="A-" control={<Radio />} label="A-" />
            </Stack>
          </Grid>
          <Grid item sm={6} md={3}>
            <Stack flexDirection={"column"}>
              <FormControlLabel value="B+" control={<Radio />} label="B+" />
              <FormControlLabel value="AB+" control={<Radio />} label="AB+" />
            </Stack>
          </Grid>
          <Grid item sm={6} md={3}>
            <Stack flexDirection={"column"}>
              <FormControlLabel value="B-" control={<Radio />} label="B-" />
              <FormControlLabel value="AB-" control={<Radio />} label="AB-" />
            </Stack>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
