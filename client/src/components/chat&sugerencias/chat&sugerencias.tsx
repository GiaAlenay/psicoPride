import React, { useState, useRef, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./chat&sugerencias.css";
import { IoSendSharp } from "react-icons/io5";
import { RespuestaChatBot } from "../RespuestaChatBot/RespuestaChatBot";
import { PreguntasSearchBar } from "../PreguntasSearchBar/PreguntasSearchBar";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response } from "../../reduxToolkit/reducers/chat";
import { ChatPreguntaRespuesta, MensajeObj } from "../../interfaces";
import { Conversacion } from "../conversacion/conversacion";
import { useDispatch } from "react-redux";
import { getRespuesta } from "../../reduxToolkit/reducers/chat";

export const ChatandSugerencias: React.FC = () => {
  const [str, setStr] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const [mensajes, setMensajes] = useState<MensajeObj[]>([]);
  const [escribiendo, setEscribiendo] = useState<boolean>(false);
  const [pregunta, setPregunta] = useState<string>("");
  let [matches, setMatches] = useState<ChatPreguntaRespuesta[]>([]);
  const loadingRespuesta: boolean = useSelector<RootState, boolean>(
    (state) => state.chat.loadingRespuesta
  );
  const respuesta: Response = useSelector<RootState, Response>(
    (state) => state.chat.respuesta
  );
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
  const scrollbarsRef = useRef<Scrollbars>(null);

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
  function updateScrollPosition() {
    const scrollbars = scrollbarsRef.current;
    if (scrollbars) {
      const { scrollHeight, clientHeight } = scrollbars.getValues();
      const maxScrollTop = scrollHeight - clientHeight;
      scrollbars.scrollTop(maxScrollTop);
    }
  }
  useEffect(() => {
    updateScrollPosition();
  }, [mensajes, escribiendo]);

  const thumbVerticalStyles = {
    backgroundColor: "rgba(50, 50, 93, 0.25)",
    borderRadius: 10,
  };

  const renderThumbVertical = ({ style, ...props }: any) => {
    const finalStyle = { ...style, ...thumbVerticalStyles };
    return <div style={finalStyle} {...props} />;
  };
  useEffect(() => {
    if (
      typeof respuesta.data === "object" &&
      !Array.isArray(respuesta.data) &&
      respuesta.status &&
      respuesta.status === 201 &&
      respuesta.data &&
      respuesta.data.respuesta &&
      !loadingRespuesta
    ) {
      setStr(respuesta.data.respuesta);
    }
    if (
      typeof respuesta === "object" &&
      !Array.isArray(respuesta) &&
      respuesta.status &&
      respuesta.status > 400 &&
      respuesta.message &&
      !loadingRespuesta
    ) {
      console.log("entre dondeee");
      setStr(respuesta.message);
    }
  }, [respuesta, loadingRespuesta]);
  useEffect(() => {
    if (str.length) {
      setMensajes((prevMsg) =>
        prevMsg.concat({
          tipo: "respuesta",
          contenido: str,
        })
      );
      setStr("");
    }
  }, [str]);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      setEscribiendo(false);
    }, 2000);
    return () => clearTimeout(tiempo);
  }, [escribiendo]);

  const onChangeInput = (text: string) => {
    setEscribiendo(true);
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
  };

  const handleSetPregunta = (e: string, id: number) => {
    setMensajes((prevMsg) =>
      prevMsg.concat({ tipo: "pregunta", contenido: e })
    );
    setPregunta(e);
    dispatch(getRespuesta(id));
  };

  const handleSendPregunta = () => {
    setMensajes((prevMsg) =>
      prevMsg.concat({ tipo: "pregunta", contenido: pregunta })
    );
    const findPregunta =
      Array.isArray(preguntas.data) &&
      preguntas.data.find((p) => p.pregunta === pregunta);

    if (findPregunta && findPregunta.id) {
      dispatch(getRespuesta(findPregunta.id));
    } else {
      dispatch(getRespuesta("x"));
    }
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
          <div className="ChatBoxMsgCont" style={{}}>
            <Scrollbars
              ref={scrollbarsRef}
              style={{ width: "100%", height: "99.8%" }}
              renderThumbVertical={renderThumbVertical}
            >
              <div>
                {saludoArray.map((s, i) => (
                  <RespuestaChatBot saludo={s} orden={i} tiempo={getTime(i)} />
                ))}
              </div>
              <Conversacion
                mensajesArray={mensajes}
                escribiendo={escribiendo}
              />
            </Scrollbars>
          </div>
          <div className="ChatBoxInputCont">
            <input
              value={pregunta}
              type="text"
              onBlur={() => {
                setEscribiendo(false);
              }}
              onChange={(e) => {
                onChangeInput(e.target.value);
              }}
              className="ChatInput"
              //   onKeyDown={(e) => {
              //     console.log("key down");
              //   }}
            />
            <div className="d-flex w-100 h-100 justify-content-center align-items-center mx-auto">
              <IoSendSharp
                className="sendBtn"
                onClick={() => {
                  handleSendPregunta();
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
        <PreguntasSearchBar
          matches={matches}
          pregunta={pregunta}
          setPregunta={(e, id) => {
            handleSetPregunta(e, id);
          }}
        />
      </div>
    </div>
  );
};
