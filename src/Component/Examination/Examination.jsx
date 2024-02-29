import {
  Box,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
// import { MyBtn } from "./MyBtn";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import PatientButton from "./PatientButton";
import Rod from "./Rod";
import NewPatientButton from "./NewPatientButton";

function Examination() {
  const [alignment, setAlignment] = React.useState({
    Eyed: "false",
    Evaluation: "false",
  });

  const handleChange = (key, value) => {
    setAlignment({ ...alignment, [key]: value });
  };

  console.log(alignment);

  return (
    <Box>
      <Box paddingX={"2rem"}>
        <Grid container marginTop={"10px"}>
          <Grid item xs={4} md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item xs={8} md={4} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  // height: "100px",
                  // width: "100px",
                }}
              />
            </Box>
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item xs={6} md={4} sm={6}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                General Examination:
              </Typography>
            </Grid>
            {/* <Grid item xs={8} md={4} sm={6}> */}
            <ImmunizationButton Array={["Normal", "Abnormal"]} />
            {/* </Grid> */}
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item xs={6} md={4} sm={6}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                One Eyed:
              </Typography>
            </Grid>
            <ToggleButtonGroup
              color="primary"
              value={alignment.Eyed}
              exclusive
              onChange={(e) => handleChange("Eyed", e.target.value)}
              aria-label="Platform"
              size="small"
            >
              {/* hover kkaaa logic */}
              <ToggleButton
                value={false}
                sx={{
                  bgcolor: alignment.Eyed === "false" ? "#1565c0" : "#fff",
                  color: alignment.Eyed === "false" ? "#fff" : "#000",
                  "&:hover": {
                    bgcolor:
                      alignment.Eyed === "true" ? "#1565c022" : "#1565c0",
                    color: alignment.Eyed === "true" ? "#1565c0" : "#fff",
                  },
                }}
              >
                NO
              </ToggleButton>
              <ToggleButton
                value={true}
                sx={{
                  bgcolor: alignment.Eyed === "true" ? "#1565c0" : "#fff",
                  color: alignment.Eyed === "true" ? "#fff" : "#000",
                  "&:hover": {
                    bgcolor:
                      alignment.Eyed === "false" ? "#1565c022" : "#1565c0",
                    color: alignment.Eyed === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                  },
                }}
              >
                YES
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item xs={6} md={4} sm={6}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                Squint Evaluation:
              </Typography>
            </Grid>
            <ToggleButtonGroup
              color="primary"
              value={alignment.Evaluation}
              exclusive
              onChange={(e) => handleChange("Evaluation", e.target.value)}
              aria-label="Platform"
              size="small"
            >
              {/* hover kkaaa logic */}
              <ToggleButton
                value={false}
                sx={{
                  bgcolor:
                    alignment.Evaluation === "false" ? "#1565c0" : "#fff",
                  color: alignment.Evaluation === "false" ? "#fff" : "#000",
                  "&:hover": {
                    bgcolor:
                      alignment.Evaluation === "true" ? "#1565c022" : "#1565c0",
                    color: alignment.Evaluation === "true" ? "#1565c0" : "#fff",
                  },
                }}
              >
                NO
              </ToggleButton>
              <ToggleButton
                value={true}
                sx={{
                  bgcolor: alignment.Evaluation === "true" ? "#1565c0" : "#fff",
                  color: alignment.Evaluation === "true" ? "#fff" : "#000",
                  "&:hover": {
                    bgcolor:
                      alignment.Evaluation === "false"
                        ? "#1565c022"
                        : "#1565c0",
                    color:
                      alignment.Evaluation === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                  },
                }}
              >
                YES
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <div
            style={{ position: "sticky", top: 0, zIndex: 1200, width: "100%" }}
          >
            <Grid container columnSpacing={"0.3rem"}>
              <Grid item xs={6} md={6} sm={6}>
                <Rod label={"R/OD"} isBtn={true} color={"#fff"} />
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                <Rod label={"L/OS"} isBtn={true} color={"fff"} />
              </Grid>
            </Grid>
          </div>
          {/* <PatientButton /> */}
          <NewPatientButton />
        </Grid>
      </Box>
    </Box>
  );
}

export default Examination;
