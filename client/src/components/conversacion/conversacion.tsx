import { MensajeObj } from "../../interfaces";
import { Mensajes } from "../mensajes/mensajes";
import "./conversacion.css";
import React from "react";

interface MyComponentProps {
  mensaje: MensajeObj;
  escribiendo: boolean;
}
export const Conversacion: React.FC<MyComponentProps> = ({
  mensaje,
  escribiendo,
}) => {
  return (
    <div>
      <Mensajes mensaje={mensaje} escribiendo={escribiendo} />
    </div>
  );
};
