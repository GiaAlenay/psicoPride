import { MensajeObj } from "../../interfaces";
import "./mensajes.css";
import React from "react";

interface MyComponentProps {
  mensajesArray: MensajeObj[];
  escribiendo: boolean;
}
export const Mensajes: React.FC<MyComponentProps> = ({
  mensajesArray,
  escribiendo,
}) => {
  console.log(mensajesArray);
  return (
    <>
      {mensajesArray.map((m, i) => (
        <div
          key={i}
          style={{ display: `${m ? "flex" : "none"}` }}
          className={`msgCont ${
            m.tipo === "pregunta" ? "msgContDerecha" : "msgContIzquierda"
          }`}
        >
          <div
            className={`msg ${
              m.tipo === "pregunta" ? "msgDerecha" : "msgIzquierda"
            }`}
          >
            {m.contenido}
          </div>
        </div>
      ))}
      <div
        style={{ display: `${escribiendo ? "flex" : "none"}` }}
        className={`msgCont ${"msgContDerecha"}`}
      >
        <div className={`msg ${"msgDerecha"}`}>
          {escribiendo && (
            <div className="loadingMsg">
              <div className="dot"> </div>
              <div className="dot"> </div>
              <div className="dot"> </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
