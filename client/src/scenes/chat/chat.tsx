import { useEffect } from "react";
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

export const Chat = () => {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");

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
          <div className="ChatBoxMsgCont"></div>
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
