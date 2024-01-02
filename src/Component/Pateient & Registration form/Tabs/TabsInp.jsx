import logo from "../../../logo.svg";
import "../../../App.css";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
// import Pateint from "./componentfolder/componene/Pateint";
import Pateint from "../Pateient/pateint";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Appointment from "../Appointment/Appointment";
import Card from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import Othedetails from "../OtherDetails/Othedetails";
import History from "../History/History";
import Allergies from "../Allergies/Allergies";

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
      <Box sx={{ paddingX: "1rem" }}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <h1>Patient Registration & Appointment Form</h1>
          </div>

          <Grid
            container
            style={{
              backgroundColor: "#D9D9D9",
              border: "1px solid black",
              position: "relative",
              height: "auto",
              // padding: "0px 35px",
            }}
          >
            <Grid style={{ height: "100%" }} item xs={12} sm={7}>
              <Tabs defaultValue={1}>
                <TabsList
                  style={{
                    // fontSize:"14px",
                    borderBottom: "1px solid black",
                    // height: "50px",
                    height: "50px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Tab
                    value={1}
                    sx={{ fontSize: { md: "10px", sm: "0.50rem" } }}
                  >
                    Pateient Details
                  </Tab>
                  <Tab value={2} sx={{ fontSize: "10px" }}>
                    Other Details
                  </Tab>
                  <Tab value={3} sx={{ fontSize: "10px" }}>
                    History
                  </Tab>
                  <Tab value={4} sx={{ fontSize: "10px" }}>
                    Allergies
                  </Tab>
                </TabsList>
                <TabPanel value={1}>
                  <Pateint />
                </TabPanel>
                <TabPanel value={2}>
                  <Othedetails />
                </TabPanel>
                <TabPanel value={3}>
                  <History />
                </TabPanel>
                <TabPanel value={4}>
                  <Allergies />
                </TabPanel>
              </Tabs>
            </Grid>
            <Grid item sm={5}>
              <Box
                sx={{
                  borderBottom: "1px solid black",
                  borderLeft: "1px solid black",
                  height: "50px",
                  // paddingLeft:"150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                  fontWeight: "700",
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
