import "./preguntas.css";
import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";
import { ChatPreguntaRespuesta } from "../../interfaces";
interface MyComponentProps {
  matches: ChatPreguntaRespuesta[];
  pregunta: string;
}

export const PreguntasSearchBar: React.FC<MyComponentProps> = ({
  matches,
  pregunta,
}) => {
  const [text, setText] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );

  return (
    <div className="preguntasSearchCont ">
      <div className="AllPreguntasCont">
        {!matches.length &&
        !pregunta.length &&
        preguntas.data &&
        Array.isArray(preguntas.data) ? (
          preguntas.data.map((p) => (
            <div key={p.id} className={`preguntaCont`}>
              {p.pregunta}
            </div>
          ))
        ) : matches.length && pregunta.length ? (
          matches.map((p) => (
            <div key={p.id} className={`preguntaCont`}>
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
