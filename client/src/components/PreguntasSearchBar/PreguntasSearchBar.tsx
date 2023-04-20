import "./preguntas.css";
import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";
import { ChatPreguntaRespuesta } from "../../interfaces";
import Placeholder from "react-bootstrap/Placeholder";
import { AiOutlineReload } from "react-icons/ai";
import { getPreguntas } from "../../reduxToolkit/reducers/chat";
import { useDispatch } from "react-redux";
interface MyComponentProps {
  matches: ChatPreguntaRespuesta[];
  pregunta: string;
  posiblePregunta: string;
  setPregunta: (p: string, id: number) => void;
}

export const PreguntasSearchBar: React.FC<MyComponentProps> = ({
  matches,
  pregunta,
  posiblePregunta,
  setPregunta,
}) => {
  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");
  const dispatch: AppDispatch = useDispatch();
  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );
  const loadingPreguntas: boolean = useSelector<RootState, boolean>(
    (state) => state.chat.loadingPreguntas
  );

  const handleReLoadPreguntas = () => {
    if (sexo && edad && orientacion && identidad) {
      dispatch(
        getPreguntas({
          SexoId: parseInt(sexo),
          GenderIdentityId: parseInt(identidad),
          SexualOrientationId: parseInt(orientacion),
        })
      );
    }
  };

  const handleElegirPregunta = (elegida: string, id: number) => {
    setPregunta(elegida, id);
  };
  if (loadingPreguntas) {
    return (
      <div className="preguntasSearchCont ">
        <div className="AllPreguntasCont">
          <div className="loadingPregCont">
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} bg="secondary" className={"loadingLine"} />
              <Placeholder xs={12} bg="secondary" className={"loadingLine"} />
              <Placeholder xs={12} bg="secondary" className={"loadingLine"} />
            </Placeholder>
          </div>
        </div>
      </div>
    );
  } else if (preguntas.status && preguntas.status >= 400) {
    return (
      <div className="preguntasSearchCont ">
        <div className="AllPreguntasCont" style={{ height: "100px" }}>
          <div className="w-100 d-flex h-100 justify-content-center align-items-center mx-auto">
            <button onClick={handleReLoadPreguntas}>
              Reintentar <AiOutlineReload />
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="preguntasSearchCont ">
      <div className="AllPreguntasCont">
        {!pregunta.length && preguntas.data && Array.isArray(preguntas.data) ? (
          preguntas.data.map((p) => (
            <div
              key={p.id}
              className={`preguntaCont ${
                posiblePregunta === p.pregunta && "currentPregSelected"
              }`}
              onClick={() => {
                if (p.pregunta) {
                  handleElegirPregunta(p.pregunta, p.id ? p.id : 1);
                }
              }}
            >
              {p.pregunta}
            </div>
          ))
        ) : matches.length && pregunta.length ? (
          matches.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                if (p.pregunta) {
                  handleElegirPregunta(p.pregunta, p.id ? p.id : 1);
                }
              }}
              className={`preguntaCont ${
                posiblePregunta === p.pregunta && "currentPregSelected"
              }`}
            >
              {p.pregunta}
            </div>
          ))
        ) : (
          <div className="w-100 text-center">
            No hay considencias que mostrar.
          </div>
        )}
      </div>
    </div>
  );
};
