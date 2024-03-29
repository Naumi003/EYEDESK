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
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function Injuiry() {
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
      <Box
        sx={{
          // width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingX: "2rem",
          paddingY: "1rem",
          // padding: "0rem",
          // marginLeft: "1rem",
        }}
      >
        <Box>
          <Grid container>
            <Grid item md={4} sm={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Nature of injuiry
              </Typography>
            </Grid>
            <Grid item md={3} sm={7}>
              <ImmunizationButton Array={["Close Globe"]} />
            </Grid>
          </Grid>
          <Grid container marginTop={"10px"}>
            <Grid item md={4} sm={4}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Open Globe injuries
              </Typography>
            </Grid>
            <Grid item md={8} sm={8}>
              <Grid container>
                <Grid item={6}>
                  <ImmunizationButton Array={["Rupture"]} />
                </Grid>
                <Grid item={6}>
                  <ImmunizationButton Array={["Penetrating"]} />
                </Grid>
                <Grid item={6}>
                  <ImmunizationButton Array={["IOFB"]} />
                </Grid>
                <Grid item={12}>
                  <ImmunizationButton Array={["Perforating"]} />
                </Grid>
                <Grid item={6}>
                  <ImmunizationButton Array={["Mixed"]} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
            <Grid item md={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                Rupture
              </Typography>
            </Grid>
            <Grid item md={7}>
              <Grid container>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Endophthalmitis"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Panophthalmitis"]}
                    padding={"0px "}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
          <Grid container marginTop={"10px"} columnSpacing={"1rem"}>
            {/* <Grid item md={5}>
              <Typography
                component="h4"
                // paddingX={"10px"}
                sx={{
                  fontSize: "16px",
                }}
              >
                IOFB
              </Typography>
            </Grid> */}
            <Grid item md={7}>
              {/* <Grid container>
                <Grid item={3}>
                  <ImmunizationButton Array={["Pellet"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Stone"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Vegitative"]} padding={"0px "} />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton
                    Array={["Non Metallic"]}
                    padding={"0px "}
                  />
                </Grid>
                <Grid item={3}>
                  <ImmunizationButton Array={["Glass"]} padding={"0px "} />
                </Grid>
              </Grid> */}
              {/* <ImmunizationButton Array={["Isolated To Cornnea (Including coreo Scleral Limbus)"]} padding={"0px "} />
              <ImmunizationButton Array={["Coreo Scleral Limbus to a point 5MM Posterior to Sclera"]} padding={"0px "} />
              <ImmunizationButton Array={["Posterior to Anterior 5MM of Sclera"]} padding={"0px "} /> */}
            </Grid>
          </Grid>
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
            <Grid item xs={8} md={4.4} sm={8}>
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
      </Box>
    </>
  );
}

export default Injuiry;
