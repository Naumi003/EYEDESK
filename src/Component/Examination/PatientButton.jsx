// import { Box, Grid, Paper, Stack } from "@mui/material";
// import React, { useState } from "react";
// import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
// import { Drugbutton } from "../Pateient & Registration form/Allergies/Allergiesbutton";
// import Button from "@mui/material/Button";
// import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
// import Appreance from "./Appreance";
// import Injuiry from "./Injuiry";
// import Conjuctiva from "./Conjuctiva";
// import Appendages from "./Appendages";
// import Sclera from "./Sclera";
// import Cornea from "./Cornea";
// import AnteriorChamber from "./AnteriorChamber";
// import Pupil from "./Pupil";
// import Iris from "./Iris";
// import Lens from "./Lens";
// import Extraocular from "./Extraocular";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Intraculor from "./Intraculor";
// import Gonioscopy from "./Gonioscopy";
// import Fundus from "./Fundus";
// import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";

// function PatientButton() {
//   // const handleChange = (event, newAlignment) => {
//   //   setAlignment(newAlignment);
//   // };

//   // const [alignment, setAlignment] = React.useState(
//   //   Array(28).fill({
//   //     isSelect: true,
//   //     bulbi: false,
//   //     anophthalmos: true,
//   //   })
//   // );

//   const [buttonStates, setButtonStates] = useState(
//     Array(28).fill(true) // Array to keep track of button states, initially all set to true
//   );
//   console.log(buttonStates);

//   const handleClick = (index, icon) => {
//     // setIcon(!icon);
//     const newButtonStates = [...buttonStates];
//     newButtonStates[index] = !newButtonStates[index];
//     setButtonStates(newButtonStates);
//   };

//   return (
//     <>
//       <Grid
//         container
//         marginTop={"10px"}
//         columnSpacing={1}
//         // bgcolor={"#f5cfd252"}
//         // sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}
//       >
//         <Grid item md={12} sm={12}>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(0)}
//               >
//                 {buttonStates[0] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>

//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 // paddingX={"10px"}
//                 borderRadius={"20px"}
//                 // width={"100%"}
//                 Array={["APPEARANCE"]}
//                 // sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}
//                 // onclick={() => handleClick(0)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(1)}
//               >
//                 {buttonStates[1] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6} sx={{ width: "100%" }}>
//               {buttonStates[0] ? null : (
//                 // <Grid container>
//                 // <Box sx={{ width: "100%" }}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     bgcolor: "#1cff001f ",
//                     borderRadius: "1rem",
//                   }}
//                 >
//                   <Appreance />
//                 </Box>
//                 // </Box>
//                 // </Grid>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6} sx={{ width: "100%" }}>
//               {buttonStates[1] ? null : (
//                 <Box
//                   sx={{
//                     width: "100%",
//                     bgcolor: "#f5cfd252 ",
//                     borderRadius: "1rem",
//                   }}
//                 >
//                   <Appreance />
//                   {/* <Box sx={{ width: "100%" }}>
//                     <Stack sx={{ width: "290px", height: "100px" }}>
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box> */}
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(2)}
//               >
//                 {buttonStates[2] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["INJURY"]}
//                 // onclick={() => handleClick(1)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(3)}
//               >
//                 {buttonStates[3] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[2] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Injuiry />
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[3] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Injuiry />
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(4)}
//               >
//                 {buttonStates[4] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["APPENDAGES"]}
//                 // onclick={() => handleClick(2)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(5)}
//               >
//                 {buttonStates[5] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[4] ? null : (
//                 <Box sx={{ width: "100%", bgcolor: "#1cff001f" }}>
//                   <Appendages />
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[5] ? null : (
//                 <Box
//                   sx={{ minWidth: "0px", width: "100%", bgcolor: "#f5cfd252" }}
//                 >
//                   <Appendages />
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(6)}
//               >
//                 {buttonStates[6] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["CONJUCTIVA"]}
//                 // onclick={() => handleClick(3)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(7)}
//               >
//                 {buttonStates[7] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[6] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Conjuctiva />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[7] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Conjuctiva />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(8)}
//               >
//                 {buttonStates[8] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["SCLERA"]}
//                 // onclick={() => handleClick(4)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(9)}
//               >
//                 {buttonStates[9] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container columnSpacing={"1rem"}>
//             <Grid item md={6} sm={6}>
//               {buttonStates[8] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Sclera />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[9] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Sclera />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>

//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(10)}
//               >
//                 {buttonStates[10] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             {/* </Grid> */}
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["CORENA"]}
//                 // onclick={() => handleClick(5)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(11)}
//               >
//                 {buttonStates[11] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[10] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Cornea />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//             <Grid md={6} sm={6}>
//               {buttonStates[11] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Cornea />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(12)}
//               >
//                 {buttonStates[12] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["ANTERIOR CHAMBER (AC)"]}
//                 // onclick={() => handleClick(6)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(13)}
//               >
//                 {buttonStates[13] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid md={6} sm={6}>
//               {buttonStates[12] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <AnteriorChamber />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//             <Grid md={6} sm={6}>
//               {buttonStates[13] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <AnteriorChamber />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(14)}
//               >
//                 {buttonStates[14] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["PUPIL"]}
//                 // onclick={() => handleClick(7)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(15)}
//               >
//                 {buttonStates[15] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[14] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Pupil />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[15] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Pupil />
//                   <Box style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(16)}
//               >
//                 {buttonStates[16] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["IRIS"]}
//                 // onclick={() => handleClick(8)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(17)}
//               >
//                 {buttonStates[17] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[16] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Iris />
//                   <Box style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[17] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Iris />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(18)}
//               >
//                 {buttonStates[18] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["LENS"]}
//                 // onclick={() => handleClick(9)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(19)}
//               >
//                 {buttonStates[19] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[18] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Lens />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[19] ? null : (
//                 <Box sx={{ bgcolor: " #f5cfd252" }}>
//                   <Lens />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(20)}
//               >
//                 {buttonStates[20] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["EXTRAOCULAR MOVEMENTS & SQUINT"]}
//                 // onclick={() => handleClick(10)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(21)}
//               >
//                 {buttonStates[21] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[20] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Extraocular />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[21] ? null : (
//                 <Box sx={{ bgcolor: " #f5cfd252" }}>
//                   <Extraocular />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(22)}
//               >
//                 {buttonStates[22] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["INTRAOCULAR PRESSURE (IOP)"]}
//                 // onclick={() => handleClick(11)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(23)}
//               >
//                 {buttonStates[23] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container columnSpacing={"1rem"}>
//             <Grid item md={6} sm={6}>
//               {buttonStates[22] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Intraculor />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[23] ? null : (
//                 <Box sx={{ bgcolor: " #f5cfd252" }}>
//                   <Intraculor />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(24)}
//               >
//                 {buttonStates[24] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["GONIOSCOPY"]}
//                 // onclick={() => handleClick(12)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(25)}
//               >
//                 {buttonStates[25] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[24] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Gonioscopy />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "585px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[25] ? null : (
//                 <Box sx={{ bgcolor: "#f5cfd252" }}>
//                   <Gonioscopy />
//                   <div style={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </div>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={0.65} sm={1.1}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(26)}
//               >
//                 {buttonStates[26] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//             <Grid item md={10.7} sm={10}>
//               <ImmunizationButton
//                 padding={"0px"}
//                 borderRadius={"20px"}
//                 width={"100%"}
//                 Array={["FUNDUS"]}
//                 // onclick={() => handleClick(13)}
//               />
//             </Grid>
//             <Grid item md={0.5} sm={0.8}>
//               <Button
//                 variant="contained"
//                 sx={{ height: "21px", width: "22px", padding: "0px" }}
//                 size="small"
//                 onClick={() => handleClick(27)}
//               >
//                 {buttonStates[27] ? (
//                   <AddCircleOutlineSharpIcon />
//                 ) : (
//                   <RemoveIcon />
//                 )}
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item md={6} sm={6}>
//               {buttonStates[26] ? null : (
//                 <Box sx={{ bgcolor: "#1cff001f" }}>
//                   <Fundus />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//             <Grid item md={6} sm={6}>
//               {buttonStates[27] ? null : (
//                 <Box sx={{ bgcolor: " #f5cfd252" }}>
//                   <Fundus />
//                   <Box sx={{ width: "100%", marginBottom: "10px" }}>
//                     <Stack
//                       sx={{
//                         width: "300px",
//                         height: "100px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <Paper
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           padding: "0.5rem",
//                         }}
//                       >
//                         <Buttonup />
//                       </Paper>
//                     </Stack>
//                   </Box>
//                 </Box>
//               )}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default PatientButton;
