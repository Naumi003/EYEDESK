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
import {store} from"./App/Store"

function App() {
  return (
    <>
      <Provider store={store}>
        <TabsInp />
        {/* <Button/> */}
        {/* <Investigation /> */}
        {/* <Examination /> */}
        {/* <Newretina/> */}
        {/* <Distant /> */}
        {/* <Intraculor /> */}
        {/* <Maingrid /> */}
        <Modaal />
      </Provider>
    </>
  );
}

export default App;
