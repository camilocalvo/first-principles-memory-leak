import React from "react";
import { IonButton, IonLabel } from "@ionic/react";

interface TitlePageProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const TitlePage = (props: TitlePageProps) => {
  const { setScreen } = props;

  return (
    <div style={{ marginTop: "4rem" }}>
      <IonLabel>Title Page (App Start)</IonLabel>
      <IonButton
        onClick={() => {
          setScreen(2);
        }}
      >
        Go to app
      </IonButton>
    </div>
  );
};

export default TitlePage;
