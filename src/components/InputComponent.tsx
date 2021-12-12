import { IonInput, IonButton } from "@ionic/react";
import "./InputComponent.css";

interface InputComponentProps {
  text: string;
  setText: (text: string) => void;
  saveHandler: (text: string) => void;
}

const InputComponent = ({
  text,
  setText,
  saveHandler,
}: InputComponentProps): JSX.Element => {
  return (
    <div className="container">
      <IonInput
        className="noteInput"
        value={text}
        placeholder="Write a note"
        onIonChange={(e) => setText(e.detail.value!)}
        clearInput
      ></IonInput>
      <IonButton color="success" onClick={() => saveHandler(text)}>
        Save
      </IonButton>
    </div>
  );
};

export default InputComponent;
