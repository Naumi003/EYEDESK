import React from "react";
import TabsInp from "./Component/Pateient & Registration form/Tabs/TabsInp";
import Button from "./Component/Pateient & Registration form/History/Button";
import Investigation from "./Component/Investigation/Investigation";
import Examination from "./Component/Examination/Examination";
import Newretina from "./Component/Newretina/Retinoscopyy";
import Distant from "./Component/Distant/GlassesPrescription";
import Intraculor from "./Component/Intraculor/Pressure";
import Maingrid from "./Component/Intraculor/Maingrid";
import Modaal from "./Component/Modaal/Refraction";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import Appreance from "./Component/Examination/Appreance";
import Injuiry from "./Component/Examination/Injuiry";
import Injuiryclose from "./Component/Examination/Injuiryclose";
import Conjuctiva from "./Component/Examination/Conjuctiva";
import Appendages from "./Component/Examination/Appendages";
import Sclera from "./Component/Examination/Sclera";
import Cornea from "./Component/Examination/Cornea";
import AnteriorChamber from "./Component/Examination/AnteriorChamber";
import Speech from "./Component/Examination/SpeechToText/Speech";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <TabsInp /> */}
        {/* <Button/> */}
        {/* <Investigation /> */}
        <Examination />
        {/* <Newretina /> */}
        {/* <Distant />
        <Intraculor />
        <Maingrid /> */}
        <Modaal />
        {/* <Appreance/> */}
        {/* <Injuiry/> */}
        {/* <Injuiryclose/> */}
        {/* <Conjuctiva /> */}
        {/* <Appendages/> */}
        {/* <Sclera/> */}
        {/* <Cornea/> */}
        {/* <AnteriorChamber/> */}
        <Speech />
      </Provider>
    </>
  );
}

export default App;
