import React, { useState, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./chat&sugerencias.css";
import { IoSendSharp } from "react-icons/io5";
import { RespuestaChatBot } from "../RespuestaChatBot/RespuestaChatBot";
import { PreguntasSearchBar } from "../PreguntasSearchBar/PreguntasSearchBar";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";
import { ChatPreguntaRespuesta } from "../../interfaces";

interface MyComponentProps {}
export const ChatandSugerencias: React.FC = () => {
  const [pregunta, setPregunta] = useState<string>("");
  let [matches, setMatches] = useState<ChatPreguntaRespuesta[]>([]);
  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );
  const saludoArray: string[] = [
    "Hola! ❤️",
    "Soy Hanayome ,un Chatbot que contestara tus preguntas.",
    "Estos son los temas:",
    "-Diversidad Sexual.",
    "Relaciones Sexuales",
    "Sexo e Identidad de Genero",
  ];

  const getTime = (indice: number): number => {
    if (indice === 0) {
      return 0;
    } else {
      let contador: number = 0;
      saludoArray.map((s, i) => {
        if (i < indice) {
          contador = contador + s.length;
        }
      });
      return contador;
    }
  };
  const scrollbarsRef = useRef<Scrollbars>(null);

  const thumbVerticalStyles = {
    backgroundColor: "rgba(50, 50, 93, 0.25)",
    borderRadius: 10,
  };

  const renderThumbVertical = ({ style, ...props }: any) => {
    const finalStyle = { ...style, ...thumbVerticalStyles };
    return <div style={finalStyle} {...props} />;
  };

  const onChangeInput = (text: string) => {
    if (Array.isArray(preguntas.data)) {
      if (text.length > 0) {
        setMatches(
          preguntas.data?.filter((p) => {
            const regex = new RegExp(`${text}`, "gi");
            return p.pregunta?.match(regex);
          }) as ChatPreguntaRespuesta[]
        );
      }
    }

    setPregunta(text);

    console.log("ss  ", pregunta);
    // console.log(matches);
  };

  return (
    <div className="chatandsuggCont">
      <div className="chatboXCont d-flex w-100 h-100 justify-content-center align-items-center mx-auto">
        <div className="chatBox">
          <div className="ChatBoxEstadoCont text-center d-flex ">
            <div className="ChatBoxNameCont">
              <h4>Hanayome</h4>
            </div>
            <div className="ChatActivo"></div>
          </div>
          <div className="ChatBoxMsgCont">
            <Scrollbars
              ref={scrollbarsRef}
              style={{ width: "100%", height: "99.8%" }}
              renderThumbVertical={renderThumbVertical}
            >
              <div style={{ paddingBottom: "30px" }}>
                {saludoArray.map((s, i) => (
                  <RespuestaChatBot saludo={s} orden={i} tiempo={getTime(i)} />
                ))}
              </div>
            </Scrollbars>
          </div>
          <div className="ChatBoxInputCont">
            <input
              type="text"
              onChange={(e) => {
                onChangeInput(e.target.value);
              }}
              className="ChatInput"
              onKeyDown={(e) => {
                console.log("key down");
              }}
            />
            <div className="d-flex w-100 h-100 justify-content-center align-items-center mx-auto">
              <IoSendSharp
                className="sendBtn"
                onClick={() => {
                  console.log("jaja");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100  justify-content-center align-items-center mx-auto ">
        <div className="ChatLogoCont">
          <img src={"logo.png"} alt={"logo"} className="chatLogo" />
        </div>
        <PreguntasSearchBar matches={matches} pregunta={pregunta} />
      </div>
    </div>
  );
};
