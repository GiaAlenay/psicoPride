import { MensajeObj } from "../../interfaces";
import { Mensajes } from "../mensajes/mensajes";
import "./conversacion.css";
import React from "react";

interface MyComponentProps {
  mensajesArray: MensajeObj[];
  escribiendo: boolean;
}
export const Conversacion: React.FC<MyComponentProps> = ({
  mensajesArray,
  escribiendo,
}) => {
  return (
    <div>
      <Mensajes mensajesArray={mensajesArray} escribiendo={escribiendo} />
    </div>
  );
};
