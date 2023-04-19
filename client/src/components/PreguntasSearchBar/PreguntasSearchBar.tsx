import "./preguntas.css";
import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";
import { ChatPreguntaRespuesta } from "../../interfaces";
interface MyComponentProps {
  matches: ChatPreguntaRespuesta[];
  pregunta: string;
  setPregunta: (p: string, id: number) => void;
}

export const PreguntasSearchBar: React.FC<MyComponentProps> = ({
  matches,
  pregunta,
  setPregunta,
}) => {
  const [text, setText] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  // useEffect(() => {
  //   console.log(matches);
  // }, [matches]);

  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );
  const handleElegirPregunta = (elegida: string, id: number) => {
    setPregunta(elegida, id);
  };
  return (
    <div className="preguntasSearchCont ">
      <div className="AllPreguntasCont">
        {!matches.length &&
        !pregunta.length &&
        preguntas.data &&
        Array.isArray(preguntas.data) ? (
          preguntas.data.map((p) => (
            <div
              key={p.id}
              className={`preguntaCont`}
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
              className={`preguntaCont`}
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
