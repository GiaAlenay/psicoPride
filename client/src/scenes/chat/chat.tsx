import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState, AppDispatch } from "../../reduxToolkit/store";
import "./chat.css";
import {
  ChatGlobalState,
  Response,
  getPreguntas,
} from "../../reduxToolkit/reducers/chat";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PreguntasSearchBar } from "../../components/PreguntasSearchBar/PreguntasSearchBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { RespuestaChatBot } from "../../components/RespuestaChatBot/RespuestaChatBot";
import { Scrollbars } from "react-custom-scrollbars-2";

export const Chat = () => {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");
  const saludoArray: string[] = [
    "Hola!",
    "Soy Hanayome ,un Chatbot que contestara tus preguntas.",
    "Estos son los temas:",
    "-Diversidad Sexual.",
    "Relaciones Sexuales",
    "Sexo e Identidad de Genero",
  ];
  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );

  const loadingPreguntas: boolean = useSelector<RootState, boolean>(
    (state) => state.chat.loadingPreguntas
  );

  // useEffect(() => {
  //   return () => {
  //     navigate("/", { replace: true });
  //   };
  // }, [location, navigate]);
  const scrollbarsRef = useRef<Scrollbars>(null);

  const thumbVerticalStyles = {
    backgroundColor: "rgba(50, 50, 93, 0.25)",
    borderRadius: 10,
  };

  const renderThumbVertical = ({ style, ...props }: any) => {
    const finalStyle = { ...style, ...thumbVerticalStyles };
    return <div style={finalStyle} {...props} />;
  };
  useEffect(() => {
    if (!sexo || !edad || !orientacion || !identidad) {
      navigate("/");
    } else {
      if (!Object.entries(preguntas).length) {
        dispatch(
          getPreguntas({
            SexoId: parseInt(sexo),
            GenderIdentityId: parseInt(identidad),
            SexualOrientationId: parseInt(orientacion),
          })
        );
      }
    }
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

  return (
    <div className="chatCont ">
      <div className="avatarContChat ">
        <AiOutlineArrowLeft
          className="arrowBtn"
          onClick={() => {
            navigate("/");
          }}
        />
        <img src={"avatar.png"} alt="avatar" className="avatarChat " />
      </div>
      <div className="chatboXCont d-flex w-100 h-100 justify-content-center align-items-center mx-auto">
        <div className="chatBox  ">
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
            <input type="text" className="ChatInput" />
            <IoSendSharp
              className="sendBtn"
              onClick={() => {
                console.log("jaja");
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex w-100  justify-content-center align-items-center mx-auto ">
        <div className="ChatLogoCont">
          <img src={"logo.png"} alt={"logo"} className="chatLogo" />
        </div>
        <PreguntasSearchBar />
      </div>
    </div>
  );
};
