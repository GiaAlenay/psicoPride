import "./preguntas.css";
import React, { useState, useEffect, useRef } from "react";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";
import { Scrollbars } from "react-custom-scrollbars-2";

interface MyComponentProps {}

export const PreguntasSearchBar: React.FC = () => {
  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );
  const scrollbarsRef = useRef<Scrollbars>(null);

  const thumbVerticalStyles = {
    backgroundColor: "rgba(50, 50, 93, 0.25)",
    borderRadius: 10,
  };

  const renderThumbVertical = ({ style, ...props }: any) => {
    const finalStyle = { ...style, ...thumbVerticalStyles };
    return <div style={finalStyle} {...props} />;
  };
  return (
    <div className="preguntasSearchCont d-flex justify-content-center align-items-center mx-auto">
      <Scrollbars
        ref={scrollbarsRef}
        style={{ width: "100%", height: 300 }}
        renderThumbVertical={renderThumbVertical}
      >
        <div className="AllPreguntasCont">
          {preguntas.data &&
            Array.isArray(preguntas.data) &&
            preguntas.data.map((p) => (
              <div key={p.id} className={`preguntaCont`}>
                {p.pregunta}
              </div>
            ))}
        </div>
      </Scrollbars>
    </div>
  );
};
