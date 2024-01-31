import logo from "../../../logo.svg";
// import "../../../App.css";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
// import Pateint from "./componentfolder/componene/Pateint";
import Pateint from "../Pateient/pateint";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Appointment from "../Appointment/Appointment";
import Card from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import Othedetails from "../OtherDetails/Othedetails";
import History from "../History/History";
import Allergies from "../Allergies/Allergies";
import Navigation from "../Navigation/Navigation";
// import"../../../../src/

function App() {
  const white = {
    // 50: "#F0F7FF",
    // 100: "#C2E0FF",
    // 200: "#80BFFF",
    // 300: "#66B2FF",
    // 400: "#3399FF",
    // 500: "#007FFF",
    // 600: "#0072E5",
    // 700: "#0059B2",
    // 800: "#004C99",
    // 900: "#003A75",
  };

  const Tab = styled(BaseTab)`
    font-family: "IBM Plex Sans", sans-serif;
    // color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    line-height: 1.5;
    padding: 8px 12px;
    margin: 6px;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: ${white[400]};
    }

    &:focus {
      color: #fff;
      outline: solid ${white[200]};
    }

    &.${tabClasses.selected} {
      background-color: blue;
      color: ${white[600]};
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(BaseTabPanel)`
    width: 100%;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 0.875rem;
  `;
  const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
  width: 100%;
  background-color: ${white[500]};
  border-radius: 12px;
   margin-bottom: 0px;
  display: flex;
  align-items: center;  
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px px 0px ${
    theme.palette.mode === "light" ? "rgba(0,0,0, 0.48" : "rgba(0,0,0, 0.2)"
  };
  `
  );
  const [activeTab, setActiveTab] = useState(1);

  const handleclick = () => {
    console.log("cfgh,vgbh");
  };

  return (
    <>
      <Box sx={{ paddingX: "1rem", marginX: "0.5rem" }}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <h1 style={{ textAlign: "center" }}>
              Patient Registration & Appointment Form
            </h1>
          </div>

          <Grid
            container
            style={{
              backgroundColor: "#F5F5F5",
              border: "1px solid gray",
              // paddingTop: "-10px",
              position: "relative",
              height: "auto",
              // padding: "0px 35px",
            }}
          >
            <Grid style={{ height: "100%" }} item md={7} sm={7}>
              <Navigation />
            </Grid>
            <Grid
              item
              md={5}
              sm={5}
              sx={{
                borderLeft: "1px solid gray",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid gray",
                  height: "48.5px",
                  // paddingLeft:"150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.900rem",
                  fontWeight: "700",
                  letterSpacing: "0.02857em",
                  display: "flex",
                  justifyContent: "center",
                  // color: "#00000099",
                  width: "100%",
                  color: "#373737",
                }}
              >
                Appointment Details
              </Box>
              <Appointment />
            </Grid>
          </Grid>
        </ThemeProvider>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "end",
            marginBottom: "5px",
          }}
        >
          <Button variant="contained" size="small">
            Create Appointment
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
