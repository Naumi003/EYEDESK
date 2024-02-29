import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import React from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function Appreance() {
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
    bulbi: "false",
    anophthalmos: "false",
    Micropththalmos: "false",
    Artificial: "false",
    Proptosis: "false",
    Dystopia: "false",
    Injured: "false",
    Swollen: "false",
  });

  const handleChange = (key, value) => {
    console.log({ [key]: !alignment[key] });
    setAlignment({ ...alignment, [key]: value });
  };

  console.log(transcript);

  

  return (
    <>
      <Box sx={{ paddingX: "3rem", paddingY: "10px" }}>
        <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Phthisis Bulbi
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.bulbi}
                  exclusive
                  onChange={(e) => handleChange("bulbi", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor: alignment.bulbi === "false" ? "#1565c0" : "#fff",
                      color: alignment.bulbi === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.bulbi === "true" ? "#1565c022" : "#1565c0",
                        color: alignment.bulbi === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor: alignment.bulbi === "true" ? "#1565c0" : "#fff",
                      color: alignment.bulbi === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.bulbi === "false" ? "#1565c022" : "#1565c0",
                        color: alignment.bulbi === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {/* <Grid item md={6}>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Anophthalmos
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.anophthalmos}
                  exclusive
                  onChange={(e) => handleChange("anophthalmos", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.anophthalmos === "false" ? "#1565c0" : "#fff",
                      color:
                        alignment.anophthalmos === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.anophthalmos === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.anophthalmos === "true"
                            ? "#1565c0"
                            : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.anophthalmos === "true" ? "#1565c0" : "#fff",
                      color:
                        alignment.anophthalmos === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.anophthalmos === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.anophthalmos === "false"
                            ? "#1565c0"
                            : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {/* <Grid item md={6}>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Micropththalmos
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Micropththalmos}
                  exclusive
                  onChange={(e) =>
                    handleChange("Micropththalmos", e.target.value)
                  }
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Micropththalmos === "false"
                          ? "#1565c0"
                          : "#fff",
                      color:
                        alignment.Micropththalmos === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Micropththalmos === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Micropththalmos === "true"
                            ? "#1565c0"
                            : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Micropththalmos === "true"
                          ? "#1565c0"
                          : "#fff",
                      color:
                        alignment.Micropththalmos === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Micropththalmos === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Micropththalmos === "false"
                            ? "#1565c0"
                            : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Artificial
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Artificial}
                  exclusive
                  onChange={(e) => handleChange("Artificial", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Artificial === "false" ? "#1565c0" : "#fff",
                      color: alignment.Artificial === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Artificial === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Artificial === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Artificial === "true" ? "#1565c0" : "#fff",
                      color: alignment.Artificial === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Artificial === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Artificial === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
        <Grid container sx={{ marginTop: "10px" }} columnSpacing={"1rem"}>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Proptosis
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Proptosis}
                  exclusive
                  onChange={(e) => handleChange("Proptosis", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Proptosis === "false" ? "#1565c0" : "#fff",
                      color: alignment.Proptosis === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Proptosis === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Proptosis === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Proptosis === "true" ? "#1565c0" : "#fff",
                      color: alignment.Proptosis === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Proptosis === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Proptosis === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Dystopia
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Dystopia}
                  exclusive
                  onChange={(e) => handleChange("Dystopia", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Dystopia === "false" ? "#1565c0" : "#fff",
                      color: alignment.Dystopia === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Dystopia === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Dystopia === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Dystopia === "true" ? "#1565c0" : "#fff",
                      color: alignment.Dystopia === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Dystopia === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Dystopia === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container columnSpacing={"1rem"} marginTop={"10px"}>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Injured
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Injured}
                  exclusive
                  onChange={(e) => handleChange("Injured", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Injured === "false" ? "#1565c0" : "#fff",
                      color: alignment.Injured === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Injured === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Injured === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Injured === "true" ? "#1565c0" : "#fff",
                      color: alignment.Injured === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Injured === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Injured === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Swollen
            </Typography>
            <Grid container>
              <Grid item md={6}>
                {" "}
                <ToggleButtonGroup
                  color="primary"
                  value={alignment.Swollen}
                  exclusive
                  onChange={(e) => handleChange("Swollen", e.target.value)}
                  aria-label="Platform"
                  size="small"
                >
                  {/* hover kkaaa logic */}
                  <ToggleButton
                    value={false}
                    sx={{
                      bgcolor:
                        alignment.Swollen === "false" ? "#1565c0" : "#fff",
                      color: alignment.Swollen === "false" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Swollen === "true"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Swollen === "true" ? "#1565c0" : "#fff",
                      },
                    }}
                  >
                    NO
                  </ToggleButton>
                  <ToggleButton
                    value={true}
                    sx={{
                      bgcolor:
                        alignment.Swollen === "true" ? "#1565c0" : "#fff",
                      color: alignment.Swollen === "true" ? "#fff" : "#000",
                      "&:hover": {
                        bgcolor:
                          alignment.Swollen === "false"
                            ? "#1565c022"
                            : "#1565c0",
                        color:
                          alignment.Swollen === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                      },
                    }}
                  >
                    YES
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={"15px"} width={"100%"} marginBottom={"10px"}>
          <Grid item xs={4} md={3} sm={4}>
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
          <Grid item xs={8} md={9} sm={8}>
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
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
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

export default Appreance;
