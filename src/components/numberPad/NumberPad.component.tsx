import { IonItem, IonModal } from "@ionic/react";
import { useState } from "react";
import NumberPadGrid from "./NumberPadGrid.component";

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
      <IonModal
        isOpen={toggleModal}
        onDidDismiss={dismissNumberPad}
        className="number-pad-modal"
      >
        <NumberPadGrid dismissNumberPad={dismissNumberPad} />
      </IonModal>

      {renderField()}
    </>
  );
};

export default NumberPad;
