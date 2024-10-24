import { IonButton } from "@ionic/react";

interface NumberPadGridProps {
  dismissNumberPad: () => void;
}

const NumberPadGrid: React.FC<NumberPadGridProps> = (
  props: NumberPadGridProps
) => {
  const { dismissNumberPad } = props;

  return (
    <>
      <IonButton className="fee-button">Fee</IonButton>
      <IonButton className="fee-button">Fii</IonButton>
      <IonButton className="fee-button">Foo</IonButton>

      <IonButton onClick={dismissNumberPad}>Close</IonButton>
    </>
  );
};

export default NumberPadGrid;
