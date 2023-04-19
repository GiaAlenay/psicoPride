import { useSelector } from "react-redux";
import { MensajeObj } from "../../interfaces";
import "./mensajes.css";
import React from "react";
import { RootState } from "../../reduxToolkit/store";

interface MyComponentProps {
  mensajesArray: MensajeObj[];
  escribiendo: boolean;
}
export const Mensajes: React.FC<MyComponentProps> = ({
  mensajesArray,
  escribiendo,
}) => {
  const loadingRespuesta: boolean = useSelector<RootState, boolean>(
    (state) => state.chat.loadingRespuesta
  );
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
        style={{ display: `${loadingRespuesta ? "flex" : "none"}` }}
        className={`msgCont ${"msgContIzquierda"}`}
      >
        <div className={`msg ${"msgIzquierda"}`}>
          {loadingRespuesta && (
            <div className="loadingMsg">
              <div className="dot"> </div>
              <div className="dot"> </div>
              <div className="dot"> </div>
            </div>
          )}
        </div>
      </div>
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
