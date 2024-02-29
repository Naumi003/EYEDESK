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

function Conjuctiva() {

      const [isListening, setIsListening] = useState(false);

      const [mic, setMic] = useState(0);

      const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
        useSpeechRecognition();

      const [transcriptStates, setTranscriptStates] = useState([
        "",
        "",
        "",
        "",
      ]);

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
    Congestion: "false",
    Tear: "false",
    Conjuctival: "false",
    SubConjuctival: "false",
    Foreign: "false",
    Follicles: "false",
    Papillae: " false",
    Pinguecula: " false",
    pterygium: "false",
    Phlycten: " false",
    Discharge: "false",
    Generalized: "false",
    localized: " false",
    Ciliary: "false",
  });

  const handleChange = (key, value) => {
    console.log({ [key]: !alignment[key] });
    setAlignment({ ...alignment, [key]: value });
  };

  return (
    <>
      <Box
        sx={{
          // width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingX: "2rem",
          paddingY: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            marginBottom={"10px"}
            columnSpacing={"5px"}
            marginTop={"10px"}
          >
            <Grid item md={3} sm={6}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Congestion
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Congestion}
                    exclusive
                    onChange={(e) => handleChange("Congestion", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Congestion === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Congestion === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Congestion === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Congestion === "true"
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
                          alignment.Congestion === "true" ? "#1565c0" : "#fff",
                        color:
                          alignment.Congestion === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Congestion === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Congestion === "false"
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
                Tear
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Tear}
                    exclusive
                    onChange={(e) => handleChange("Tear", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Tear === "false" ? "#1565c0" : "#fff",
                        color: alignment.Tear === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Tear === "true" ? "#1565c022" : "#1565c0",
                          color: alignment.Tear === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor: alignment.Tear === "true" ? "#1565c0" : "#fff",
                        color: alignment.Tear === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Tear === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Tear === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
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
                Conjuctival Bleb
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Conjuctival}
                    exclusive
                    onChange={(e) =>
                      handleChange("Conjuctival", e.target.value)
                    }
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Conjuctival === "false"
                            ? "#1565c0"
                            : "#fff",
                        color:
                          alignment.Conjuctival === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Conjuctival === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Conjuctival === "true"
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
                          alignment.Conjuctival === "true" ? "#1565c0" : "#fff",
                        color:
                          alignment.Conjuctival === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Conjuctival === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Conjuctival === "false"
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
          <Grid
            container
            columnSpacing={"1rem"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item md={3} sm={4}>
              <ImmunizationButton Array={["Generalized"]} />
            </Grid>
            <Grid item md={3} sm={4}>
              <ImmunizationButton Array={["Localized"]} />
            </Grid>
            <Grid item md={3} sm={4}>
              <ImmunizationButton Array={["Ciliary"]} />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={"5px"}
            marginTop={"10px"}
            // marginBottom={"10px"}
          >
            <Grid item md={6} sm={12}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "14px",
                  // fontWeight: "600",
                }}
              >
                SubConjuctival Haemorrhage
              </Typography>
              <Grid container>
                <Grid item md={3} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.SubConjuctival}
                    exclusive
                    onChange={(e) =>
                      handleChange("SubConjuctival", e.target.value)
                    }
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.SubConjuctival === "false"
                            ? "#1565c0"
                            : "#fff",
                        color:
                          alignment.SubConjuctival === "false"
                            ? "#fff"
                            : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.SubConjuctival === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.SubConjuctival === "true"
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
                          alignment.SubConjuctival === "true"
                            ? "#1565c0"
                            : "#fff",
                        color:
                          alignment.SubConjuctival === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.SubConjuctival === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.SubConjuctival === "false"
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
            <Grid item md={4}>
              {/* <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Tear
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <ImmunizationButton Array={["NO"]} padding={"0px "} />
                </Grid>
                <Grid item md={6}>
                  <ImmunizationButton Array={["YES"]} padding={"0px "} />
                </Grid>
              </Grid> */}
            </Grid>
            <Grid item md={4} sm={6} marginTop={"10px"}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Foreign Body
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
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
                Follicles
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Follicles}
                    exclusive
                    onChange={(e) => handleChange(" Follicles", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Follicles === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Follicles === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Follicles === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Follicles === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Follicles === "true" ? "#1565c0" : "#fff",
                        color: alignment.Follicles === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Follicles === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Follicles === "false"
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
                Papillae
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Papillae}
                    exclusive
                    onChange={(e) => handleChange("Papillae", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Papillae === "false" ? "#1565c0" : "#fff",
                        color: alignment.Papillae === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Papillae === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Papillae === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Papillae === "true" ? "#1565c0" : "#fff",
                        color: alignment.Papillae === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Papillae === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Papillae === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
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
                Pinguecula
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Pinguecula}
                    exclusive
                    onChange={(e) => handleChange("Pinguecula", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Pinguecula === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Pinguecula === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Pinguecula === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Pinguecula === "true"
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
                          alignment.Pinguecula === "true" ? "#1565c0" : "#fff",
                        color:
                          alignment.Pinguecula === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Pinguecula === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Pinguecula === "false"
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
                    value={alignment.Phlyctenm}
                    exclusive
                    onChange={(e) => handleChange("Phlycten", e.target.value)}
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
                            alignment.Phlycten === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Phlycten === "false" ? "#1565c0" : "#fff", // Keep the same background color on hover
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
                Discharge
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment.Discharge}
                    exclusive
                    onChange={(e) => handleChange(" Discharge", e.target.value)}
                    aria-label="Platform"
                    size="small"
                  >
                    {/* hover kkaaa logic */}
                    <ToggleButton
                      value={false}
                      sx={{
                        bgcolor:
                          alignment.Discharge === "false" ? "#1565c0" : "#fff",
                        color:
                          alignment.Discharge === "false" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Discharge === "true"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Discharge === "true" ? "#1565c0" : "#fff",
                        },
                      }}
                    >
                      NO
                    </ToggleButton>
                    <ToggleButton
                      value={true}
                      sx={{
                        bgcolor:
                          alignment.Discharge === "true" ? "#1565c0" : "#fff",
                        color: alignment.Discharge === "true" ? "#fff" : "#000",
                        "&:hover": {
                          bgcolor:
                            alignment.Discharge === "false"
                              ? "#1565c022"
                              : "#1565c0",
                          color:
                            alignment.Discharge === "false"
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
          <Grid
            container
            // marginTop={"15px"}
            // width={"50%"}
            width={"100%"}
            // marginBottom={"10px"}
          >
            <Grid item xs={4} md={3}>
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
            <Grid item xs={8} md={6} sm={8}>
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

export default Conjuctiva;
