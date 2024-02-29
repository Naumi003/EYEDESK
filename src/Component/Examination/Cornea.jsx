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
import CloseIcon from "@mui/icons-material/Close";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function Cornea() {
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
              Size
            </Typography>
          </Grid>
          <Grid item md={10} marginTop={"10px"}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Micro"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Macro"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Shape
            </Typography>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Irregural"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Keratoconus"]} />
              </Grid>
              <Grid md={4} marginTop={"10px"}>
                <ImmunizationButton Array={["Keratoglobus"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"15px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Surface
            </Typography>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={3}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Epi defect"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Thining"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Scarring"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Vascularisation"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Degeneration"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Dystrophy"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Foreign Body"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Tear"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["KP"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Opacity"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Ulcer"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Suture"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Graft"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Contact lens"]} />
              </Grid>
              <Grid md={3}>
                <ImmunizationButton Array={["Edema"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={4}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Florescein Staining
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Positive "]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Negative"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={4}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Corneal Sensation
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={4}>
                <ImmunizationButton Array={["Normal"]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Absent "]} />
              </Grid>
              <Grid md={4}>
                <ImmunizationButton Array={["Reduced"]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"16px"}>
          <Grid item md={4}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Schirmer,s Test1
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container columnSpacing={"0.3rem"}>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      mmin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      mmin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"16px"}>
          <Grid item md={4}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              Schirmer,s Test2
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid container columnSpacing={"0.3rem"}>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      mmin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      mmin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              CCT1
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={7}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      UM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid md={6}>
                <Grid container columnSpacing={"2rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4} marginTop={"6px"}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ padding: "0px" }}
                      size="small"
                      //   onClick={() => handleClick(8)}
                    >
                      {/* <CloseIcon /> */}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              CCT1
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={7}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      UM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid md={6}>
                <Grid container columnSpacing={"2rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4} marginTop={"6px"}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ padding: "0px" }}
                      size="small"
                      //   onClick={() => handleClick(8)}
                    >
                      <CloseIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              CCT1
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={7}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      UM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid md={6}>
                <Grid container columnSpacing={"2rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4} marginTop={"6px"}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ padding: "0px" }}
                      size="small"
                      //   onClick={() => handleClick(8)}
                    >
                      <CloseIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginBottom={"10px"}>
          <Grid item md={2}>
            <Typography
              component="h4"
              // paddingX={"10px"}
              sx={{
                fontSize: "16px",
              }}
            >
              CCT1
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={6}>
                <Grid container columnSpacing={"0.3rem"}>
                  <Grid item md={7}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <Typography
                      component="h4"
                      // paddingX={"10px"}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      UM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid md={6}>
                <Grid container columnSpacing={"2rem"}>
                  <Grid item md={8}>
                    <Box sx={{ width: "100%", maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4} marginTop={"6px"}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ padding: "0px" }}
                      size="small"
                      //   onClick={() => handleClick(8)}
                    >
                      <CloseIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item xs={8} md={4.5} sm={8}>
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

export default Cornea;
