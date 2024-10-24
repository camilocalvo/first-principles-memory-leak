import React, { useState } from "react";
import "./App.css";
import "@ionic/react/css/core.css";

import {
  IonApp,
  IonPage,
  setupIonicReact,
} from "@ionic/react";
import Switcher from "./Switcher";
import TitlePage from "./components/titlePage/Title.page";

setupIonicReact();

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <IonApp>
      <IonPage>
        {screen === 1 && <TitlePage setScreen={setScreen} />}
        {screen === 2 && <Switcher />}
      </IonPage>
    </IonApp>
  );
}

export default App;
