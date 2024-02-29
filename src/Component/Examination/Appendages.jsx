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

function Appendages() {
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
    Chalazion: "false",
    Ptosis: "false",
    Swelling: "false",
    Entropion: "false",
    Ectropion: "false",
    Mass: "false",
    Meibomitism: " false",
    Trichiasis: "false",
    Dystrichiasis: "false",
    pterygium: "false",
    Phlycten: "false",
    Syringing: " false",
  });

  const handleChange = (key, value) => {
    setAlignment({ ...alignment, [key]: value });
  };
  console.log(alignment);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingX: "1rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingY: "10px",
            paddingX: "20px",
          }}
        >
          <Grid
            container
            marginBottom={"10px"}
            columnSpacing={"5px"}
            marginTop={"10px"}
            // width={"100%"}
          >
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Chalazion
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  {" "}
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Chalazion}
                    exclusive
                    onChange={(e) => handleChange("Chalazion", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Chalazion === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Chalazion === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Chalazion === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Chalazion === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Chalazion === "true" ? "#1565c0" : "#fff",
                        color: alignment.Chalazion === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Chalazion === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Chalazion === "false"
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
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Ptosis
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  {" "}
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Ptosis}
                    exclusive
                    onChange={(e) => handleChange("Ptosis", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Ptosis === "false" ? "#1565c0" : "#fff",
                        color: alignment.Ptosis === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Ptosis === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Ptosis === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Ptosis === "true" ? "#1565c0" : "#fff",
                        color: alignment.Ptosis === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Ptosis === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Ptosis === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                        },
                      }}
                    >
                      YES
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Swelling
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  {" "}
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Swelling}
                    exclusive
                    onChange={(e) => handleChange("Swelling", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Swelling === "false" ? "#1565c0" : "#fff",
                        color: alignment.Swelling === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Swelling === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Swelling === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Swelling === "true" ? "#1565c0" : "#fff",
                        color: alignment.Swelling === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Swelling === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Swelling === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                        },
                      }}
                    >
                      YES
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Entropion
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  {" "}
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Entropion}
                    exclusive
                    onChange={(e) => handleChange("Entropion", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Entropion === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Entropion === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Entropion === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Entropion === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Entropion === "true" ? "#1565c0" : "#fff",
                        color: alignment.Entropion === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Entropion === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Entropion === "false"
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
          </Grid>

          <Grid container columnSpacing={"5px"}>
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                  //   fontWeight: "545",
                }}
              >
                Ectropion
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  {" "}
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Ectropion}
                    exclusive
                    onChange={(e) => handleChange("Ectropion", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Ectropion === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Ectropion === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Ectropion === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Ectropion === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Ectropion === "true" ? "#1565c0" : "#fff",
                        color: alignment.Ectropion === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Ectropion === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Ectropion === "false"
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
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Mass
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Mass}
                    exclusive
                    onChange={(e) => handleChange("Mass", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Mass === "false" ? "#1565c0" : "#fff",
                        color: alignment.Mass === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Mass === "true" ? "#1565c022" : "#1565c0",
                          color: alignment.Mass === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor: alignment.Mass === "true" ? "#1565c0" : "#fff",
                        color: alignment.Mass === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Mass === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Mass === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
                        },
                      }}
                    >
                      YES
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Meibomitism
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  {" "}
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Meibomitism}
                    exclusive
                    onChange={(e) =>
                      handleChange("Meibomitism", e.target.value)
                    }
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Meibomitism === "false"
                            ? "#1565c0"
                            : "#fff",
                        color:
                          alignment.Meibomitism === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Meibomitism === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Meibomitism === "true"
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
                          alignment.Meibomitism === "true" ? "#1565c0" : "#fff",
                        color:
                          alignment.Meibomitism === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Meibomitism === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Meibomitism === "false"
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
          </Grid>
          <Grid container columnSpacing={"5px"} marginTop={"10px"}>
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Trichiasis
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Trichiasis}
                    exclusive
                    onChange={(e) => handleChange("Trichiasis", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Trichiasis === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Trichiasis === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Trichiasis === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Trichiasis === "true"
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
                          alignment.Trichiasis === "true" ? "#1565c0" : "#fff",
                        color:
                          alignment.Trichiasis === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Trichiasis === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Trichiasis === "false"
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
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Dystrichiasis
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Dystrichiasis}
                    exclusive
                    onChange={(e) =>
                      handleChange("Dystrichiasis", e.target.value)
                    }
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Dystrichiasis === "false"
                            ? "#1565c0"
                            : "#fff",
                        color:
                          alignment.Dystrichiasis === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Dystrichiasis === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Dystrichiasis === "true"
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
                          alignment.Dystrichiasis === "true"
                            ? "#1565c0"
                            : "#fff",
                        color:
                          alignment.Dystrichiasis === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Dystrichiasis === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Dystrichiasis === "false"
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
            {/* <Grid item md={4}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Pinguecula
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <ImmunizationButton Array={["NO"]} padding={"0px "} />
                </Grid>
                <Grid item md={6}>
                  <ImmunizationButton Array={["YES"]} padding={"0px "} />
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid container columnSpacing={"5px"} paddingY={"10px"}>
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                pterygium
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.pterygium}
                    exclusive
                    onChange={(e) => handleChange("pterygium", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.pterygium === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.pterygium === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.pterygium === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.pterygium === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.pterygium === "true" ? "#1565c0" : "#fff",
                        color: alignment.pterygium === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.pterygium === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.pterygium === "false"
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
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Phlycten
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Phlycten}
                    exclusive
                    onChange={(e) => handleChange(" Phlycten", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Phlycten === "false" ? "#1565c0" : "#fff",
                        color: alignment.Phlycten === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Phlycten === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Phlycten === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Phlycten === "true" ? "#1565c0" : "#fff",
                        color: alignment.Phlycten === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.pterygium === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.pterygium === "false"
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
          </Grid>
          <Grid container columnSpacing={"5px"}>
            <Grid item md={4} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Syringing
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ImmunizationButton Array={["Normal", "Abnormal"]} />
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item md={3}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Phlycten
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <ImmunizationButton Array={["NO"]} padding={"0px "} />
                </Grid>
                <Grid item md={6}>
                  <ImmunizationButton Array={["YES"]} padding={"0px "} />
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid
            container
            marginTop={"15px"}
            // width={"50%"}
            width={"100%"}
            marginBottom={"10px"}
          >
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
            <Grid item md={8}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={8} sx={{ display: "flex" }}>
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
      </Box>
    </>
  );
}

export default Appendages;
