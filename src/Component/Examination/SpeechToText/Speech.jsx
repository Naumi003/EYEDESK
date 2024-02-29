import {
  Box,
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
function Speech() {
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
    resetTranscript(); // Reset transcript before starting a new one
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  console.log(transcriptStates);

  return (
    <>
      <Box>
        <Typography
          component="h4"
          // paddingX={"10px"}
          sx={{
            // fontSize: "16px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          SPEECH TO TEXT
        </Typography>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          aspernatur quaerat nihil possimus minus adipisci explicabo molestias
          exercitationem in iste iure nulla voluptas impedit deleniti
          reiciendis, natus ad quam odio.
        </p>
        <Grid container spacing={2}>
          {transcriptStates.map((keys, index) => (
            <Grid item xs={6} key={index}>
              <TextField
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                value={keys}
                readOnly // Ensure TextField is read-only to prevent manual input
              />
              <Button
                // onClick={() => {
                //   startListening();
                //   stopListening(index);
                //   setMic(index);
                // }}
                onClick={() => {
                  if (!keys) {
                    startListening();
                    setMic(index);
                  } else {
                    stopListening(index);
                  }
                  startListening();
                }}
              >
                {keys ? <PauseCircleIcon /> : <MicIcon />}
              </Button>
              {/* <Button onClick={() => stopListening(index)}>
                <MicOffIcon />
              </Button> */}
            </Grid>
          ))}
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              value={transcriptStates[0]} // Use transcriptStates[0] for the single text field
              readOnly // Ensure TextField is read-only to prevent manual input
            />
            <Button onClick={startListening}>
              <MicIcon />
            </Button>
            <Button onClick={stopListening}>
              <MicOffIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              value={transcriptStates[1]} // Use transcriptStates[0] for the single text field
              readOnly // Ensure TextField is read-only to prevent manual input
            />
            <Button onClick={startListening}>
              <MicIcon />
            </Button>
            <Button onClick={stopListening}>
              <MicOffIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              value={transcriptStates[2]} // Use transcriptStates[0] for the single text field
              readOnly // Ensure TextField is read-only to prevent manual input
            />
            <Button onClick={startListening}>
              <MicIcon />
            </Button>
            <Button onClick={stopListening}>
              <MicOffIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              value={transcriptStates[1]} // Use transcriptStates[0] for the single text field
              readOnly // Ensure TextField is read-only to prevent manual input
            />
            <Button onClick={startListening}>
              <MicIcon />
            </Button>
            <Button onClick={stopListening}>
              <MicOffIcon />
            </Button>
          </Grid>
        </Grid> */}
      </Box>
    </>
  );
}

export default Speech;
