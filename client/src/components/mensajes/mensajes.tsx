import { MensajeObj } from "../../interfaces";
import "./mensajes.css";
import React from "react";

interface MyComponentProps {
  mensaje: MensajeObj;
  escribiendo: boolean;
}
export const Mensajes: React.FC<MyComponentProps> = ({
  mensaje,
  escribiendo,
}) => {
  return (
    <div
      style={{ display: `${escribiendo ? "flex" : "none"}` }}
      className={`msgCont ${
        mensaje.tipo === "pregunta" ? "msgContDerecha" : "msgContIzquierda"
      }`}
    >
      <div
        className={`msg ${
          mensaje.tipo === "pregunta" ? "msgDerecha" : "msgIzquierda"
        }`}
      >
        aaaaaagd l ls v
      </div>
    </div>
  );
};
