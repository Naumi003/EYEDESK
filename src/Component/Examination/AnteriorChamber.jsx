import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
// import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function AnteriorChamber() {
     const [isListening, setIsListening] = useState(false);

     const [mic, setMic] = useState(0);

     const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
       useSpeechRecognition();

     const [transcriptStates, setTranscriptStates] = useState(["", "", "", ""]);

     useEffect(() => {
       console.log(transcript);
       if (browserSupportsSpeechRecognition) {
         setTranscriptStates((prevTranscripts) => {
           const updatedTranscripts = [...prevTranscripts];
           updatedTranscripts[mic] = transcript;
           return updatedTranscripts;
         });
       }
     }, [browserSupportsSpeechRecognition, transcript]);

     const startListening = () => {
       // resetTranscript(); // Reset transcript before starting a new one
       SpeechRecognition.startListening({
         continuous: true,
         language: "en-IN",
       });
     };

     const stopListening = () => {
       SpeechRecognition.stopListening();
     };

     console.log(transcriptStates);
     const handleTranscriptChange = (e) => {
       console.log(e.target.value);
       let data = [...transcriptStates];
       data[0] = e.target.value;
       console.log(data);
       setTranscriptStates(data);
     };

  const [alignment, setAlignment] = React.useState({
    cells: "false",
    Flare: "false",
    Hyphema: "false",
    Foreign: "false",
  });

  const handleChange = (key, value) => {
    setAlignment({ ...alignment, [key]: value });
  };
  return (
    <>
      <Box sx={{ paddingX: "2rem" }}>
        <Grid
          container
          marginBottom={"10px"}
          marginTop={"10px"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2} marginTop={"10px"}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Depth
            </Typography>
          </Grid>
          <Grid item md={7} marginTop={"10px"}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Shallow "]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Deep"]} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} marginTop={"10px"}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginBottom={"10px"}
          marginTop={"10px"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Cells
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={4}>
                <Grid md={4}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.cells}
                    exclusive
                    onChange={(e) => handleChange("cells", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.cells === "false" ? "#1565c0" : "#fff",
                        color: alignment.cells === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.cells === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.cells === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.cells === "true" ? "#1565c0" : "#fff",
                        color: alignment.cells === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.cells === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.cells === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                        },
                      }}
                    >
                      YES
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>

              {/* <Grid md={4}>
              <ImmunizationButton Array={["Deep"]} padding={"0px "} />
            </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginBottom={"10px"}
          marginTop={"10px"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Flare
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={4}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Flare}
                  exclusive
                  onChange={(e) => handleChange("Flare", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor: alignment.Flare === "false" ? "#1565c0" : "#fff",
                      color: alignment.Flare === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Flare === "true" ? "#1565c022" : "#1565c0",
                        color: alignment.Flare === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor: alignment.Flare === "true" ? "#1565c0" : "#fff",
                      color: alignment.Flare === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Flare === "false" ? "#1565c022" : "#1565c0",
                        color: alignment.Flare === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              {/* <Grid md={4}>
              <ImmunizationButton Array={["Deep"]} padding={"0px "} />
            </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginBottom={"10px"}
          marginTop={"10px"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Hyphema
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={4}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Hyphema}
                  exclusive
                  onChange={(e) => handleChange(" Hyphema", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Hyphema === "false" ? "#1565c0" : "#fff",
                      color: alignment.Hyphema === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Hyphema === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Hyphema === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Hyphema === "true" ? "#1565c0" : "#fff",
                      color: alignment.Hyphema === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Hyphema === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Hyphema === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginBottom={"10px"}
          marginTop={"10px"}
          columnSpacing={"1rem"}
        >
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Foreign Body
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={4}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Foreign}
                  exclusive
                  onChange={(e) => handleChange("Foreign", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Foreign === "false" ? "#1565c0" : "#fff",
                      color: alignment.Foreign === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Foreign === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Foreign === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Foreign === "true" ? "#1565c0" : "#fff",
                      color: alignment.Foreign === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Foreign === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Foreign === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {/* <Grid md={4}>
              <ImmunizationButton Array={["Deep"]} padding={"0px "} />
            </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop={"15px"}
          // width={"50%"}
          width={"100%"}
          marginBottom={"10px"}
        >
          <Grid item xs={5} md={5} sm={4}>
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
          <Grid item xs={8} md={7} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={12} sx={{ display: "flex" }}>
                <TextField
                  size="small"
                  fullWidth
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  value={transcriptStates[0]}
                  onChange={handleTranscriptChange}
                  // Use transcriptStates[0] for the single text field
                  readOnly // Ensure TextField is read-only to prevent manual input
                />

                {/* <Button onClick={startListening}>
                  <MicIcon />
                </Button>

                <Button onClick={stopListening}>
                  <PauseCircleFilledIcon />
                </Button> */}
                <Button
                  onClick={() => {
                    if (isListening) {
                      stopListening();
                    } else {
                      startListening();
                    }
                    setIsListening(!isListening);
                  }}
                >
                  {isListening ? <PauseCircleFilledIcon /> : <MicIcon />}
                </Button>
              </Grid>
            </Grid>{" "}
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

export default AnteriorChamber;
