import React, { useState, useRef, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./chat&sugerencias.css";
import { IoSendSharp, IoClose } from "react-icons/io5";
import { RespuestaChatBot } from "../RespuestaChatBot/RespuestaChatBot";
import { PreguntasSearchBar } from "../PreguntasSearchBar/PreguntasSearchBar";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import { Response, vaciarRespuesta } from "../../reduxToolkit/reducers/chat";
import { ChatPreguntaRespuesta, MensajeObj } from "../../interfaces";
import { Conversacion } from "../conversacion/conversacion";
import { useDispatch } from "react-redux";
import { getRespuesta } from "../../reduxToolkit/reducers/chat";

export const ChatandSugerencias: React.FC = () => {
  const [str, setStr] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const [mensajes, setMensajes] = useState<MensajeObj[]>([]);
  const [escribiendo, setEscribiendo] = useState<boolean>(false);
  const [loadingSaludo, SetLoadingSaludo] = useState(true);
  const [pregunta, setPregunta] = useState<string>("");
  const [matches, setMatches] = useState<ChatPreguntaRespuesta[]>([]);
  const scrollbarsRef = useRef<Scrollbars>(null);
  const [posiblePregunta, setposiblePregunta] = useState<string>("");
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
    // "Soy Hanayome ,un Chatbot que contestara tus preguntas.",
    // "Estos son los temas:",
    // "-Diversidad Sexual.",
    // "Relaciones Sexuales",
    // "Sexo e Identidad de Genero",
  ];

  useEffect(() => {
    return () => {
      setMensajes([]);
      dispatch(vaciarRespuesta());
    };
  }, []);

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

  useEffect(() => {
    if (matches.length > 0 && matches[0].pregunta) {
      setIndexPRegunta(0);
      setposiblePregunta(matches[0].pregunta);
    } else {
      setposiblePregunta("");
    }
  }, [matches]);

  function updateScrollPosition() {
    const scrollbars = scrollbarsRef.current;
    if (scrollbars) {
      const { scrollHeight, clientHeight } = scrollbars.getValues();
      const maxScrollTop = scrollHeight - clientHeight;
      scrollbars.scrollTop(maxScrollTop);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      SetLoadingSaludo(false);
    }, 1900);
  }, []);
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

  const handleSendPregunta = (setPosibleAPregunta?: string) => {
    let findPregunta;
    setMensajes((prevMsg) =>
      prevMsg.concat({
        tipo: "pregunta",
        contenido: setPosibleAPregunta ? setPosibleAPregunta : pregunta,
      })
    );

    if (setPosibleAPregunta) {
      findPregunta =
        Array.isArray(preguntas.data) &&
        preguntas.data.find((p) => p.pregunta === posiblePregunta);
    } else {
      findPregunta =
        Array.isArray(preguntas.data) &&
        preguntas.data.find((p) => p.pregunta === pregunta);
    }
    console.log("llega pregunta:", findPregunta);
    if (findPregunta && findPregunta.id) {
      dispatch(getRespuesta(findPregunta.id));
    } else {
      dispatch(getRespuesta("x"));
    }
  };

  let [indexPregunta, setIndexPRegunta] = useState<number>(0);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (posiblePregunta !== "") {
        setPregunta(posiblePregunta);
      }
      handleSendPregunta(posiblePregunta);
      event.preventDefault();
    }
    if (event.key === "ArrowUp") {
      const prevMatch = matches[indexPregunta - 1];
      if (prevMatch && prevMatch.pregunta) {
        setIndexPRegunta(indexPregunta - 1);
        setposiblePregunta(prevMatch.pregunta);
      }
    }
    if (event.key === "ArrowDown") {
      const prevMatch = matches[indexPregunta + 1];
      if (prevMatch && prevMatch.pregunta) {
        setIndexPRegunta(indexPregunta + 1);
        setposiblePregunta(prevMatch.pregunta);
      }
    }
    if (event.keyCode === 27) {
      setPregunta("");
    }
  };

  return (
    <div className="chatandsuggCont">
      <div className="ChatLogoContHide">
        <img src={"logo.png"} alt={"logo"} className="chatLogo" />
      </div>
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
                <div
                  style={{ display: `${loadingSaludo ? "flex" : "none"}` }}
                  className={`msgCont ${"msgContIzquierda"}`}
                >
                  <div className={`msg ${"msgIzquierda"}`}>
                    {loadingSaludo && (
                      <div className="loadingMsg">
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                      </div>
                    )}
                  </div>
                </div>
                {saludoArray.map((s, i) => (
                  <RespuestaChatBot
                    key={i}
                    saludo={s}
                    orden={i}
                    tiempo={getTime(i)}
                  />
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
              placeholder="Escribe una pregunta..."
              value={pregunta}
              type="text"
              onBlur={() => {
                setEscribiendo(false);
              }}
              onChange={(e) => {
                onChangeInput(e.target.value);
              }}
              className="ChatInput"
              onKeyDown={(e) => {
                handleKeyDown(e);
              }}
            />
            <div className="d-flex w-100 h-100 justify-content-center align-items-center mx-auto ">
              {pregunta && (
                <IoClose
                  className="closeBtnChat"
                  onClick={() => {
                    setPregunta("");
                  }}
                />
              )}
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
      <div className="ChatLogoSeacrhPregCont  w-100  justify-content-center align-items-center mx-auto ">
        <div className="ChatLogoCont">
          <img src={"logo.png"} alt={"logo"} className="chatLogo" />
        </div>
        <PreguntasSearchBar
          posiblePregunta={posiblePregunta}
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
