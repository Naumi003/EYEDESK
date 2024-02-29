import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
// import React from "react";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function Sclera() {
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
          <Grid item xs={8} md={4.3} sm={8}>
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

export default Sclera;
