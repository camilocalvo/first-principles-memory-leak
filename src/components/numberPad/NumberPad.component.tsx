import { IonContent, IonItem, IonList, IonModal } from "@ionic/react";
import { useState } from "react";

const NumberPad: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const showNumberPad = (e: any) => {
    setToggleModal(true);
  };

  const dismissNumberPad = () => {
    setToggleModal(false);
  };

  const renderField = () => {
    return <IonItem onClick={showNumberPad}>Number Pad Field</IonItem>;
  };

  return (
    <>
      <IonModal isOpen={toggleModal} onClick={() => dismissNumberPad()}>
        <IonContent>
          <IonList>
            <IonItem className="spinky-doo">To be detached</IonItem>
          </IonList>
        </IonContent>
        {/* <IonButton className="fee-button">Fee</IonButton>
        <IonButton className="fee-button">Fii</IonButton>
        <IonButton className="fee-button">Foo</IonButton> */}

        {/* <IonButton className="fee-button" onClick={dismissNumberPad}>
          Close
        </IonButton> */}
      </IonModal>

      {renderField()}
    </>
  );
};

export default NumberPad;
