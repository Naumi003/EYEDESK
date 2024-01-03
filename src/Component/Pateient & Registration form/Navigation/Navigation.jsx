import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pateint from "../Pateient/pateint";
import Othedetails from "../OtherDetails/Othedetails";
import History from "../History/History";
import Allergies from "../Allergies/Allergies";
import { Grid } from "@mui/material";
import "../../../App.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <style jsx>{`
        .MuiBox-root {
          padding: 0px;
        }
      `}</style>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "50px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            sx={{ borderBottom: "1px solid gray", color: "white" }}
          >
            <Tab
              label="Patient Details"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&.Mui-selected": {
                  // Remove default active color
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Other Details"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&.Mui-selected": {
                  // Remove default active color
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },

                borderLeft: "0.5px solid gray",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label="History"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#373737",
                "&.Mui-selected": {
                  // Remove default active color
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },

                borderLeft: "0.5px solid gray",
              }}
              {...a11yProps(2)}
            />
            <Tab
              label="Allergies"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#373737",
                "&.Mui-selected": {
                  // Remove default active color
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },
                borderLeft: "0.5px solid gray",
              }}
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Pateint />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Othedetails />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <History />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Allergies />
        </CustomTabPanel>
      </Box>
    </>
  );
}
