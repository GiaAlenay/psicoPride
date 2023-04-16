import "./preguntas.css";
import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";

interface MyComponentProps {}

export const PreguntasSearchBar: React.FC = () => {
  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );
  return (
    <div className="preguntasSearchCont d-flex justify-content-center align-items-center mx-auto">
      <div className="AllPreguntasCont">
        {preguntas.data &&
          Array.isArray(preguntas.data) &&
          preguntas.data.map((p) => (
            <div key={p.id} className={`preguntaCont`}>
              {p.pregunta}
            </div>
          ))}
      </div>
    </div>
  );
};
