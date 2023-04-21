import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { PreguntasSearchBar } from "../PreguntasSearchBar/PreguntasSearchBar";
import { ChatPreguntaRespuesta, MensajeObj } from "../../interfaces";
import { getRespuesta } from "../../reduxToolkit/reducers/chat";

interface MyComponentProps {
  show: boolean;
  handleClose: () => void;
  mensajes: MensajeObj[];
  setMensajes: (p: string, id: number) => void;
}
export const ModalSugerencias: React.FC<MyComponentProps> = ({
  show,
  handleClose,
  mensajes,
  setMensajes,
}) => {
  const [posiblePregunta, setposiblePregunta] = useState<string>("");
  const [pregunta, setPregunta] = useState<string>("");
  const [matches, setMatches] = useState<ChatPreguntaRespuesta[]>([]);

  return (
    <Modal
      show={show}
      size="lg"
      className="modalSugerecias"
      centered
      onHide={handleClose}
    >
      <div>
        <PreguntasSearchBar
          posiblePregunta={posiblePregunta}
          matches={matches}
          pregunta={pregunta}
          setPregunta={(e, id) => {
            setMensajes(e, id);
          }}
        />
      </div>
    </Modal>
  );
};
