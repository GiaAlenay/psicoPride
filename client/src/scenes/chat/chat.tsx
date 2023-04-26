import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../reduxToolkit/store";
import "./chat.css";
import { Response, getPreguntas } from "../../reduxToolkit/reducers/chat";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ChatandSugerencias } from "../../components/chat&sugerencias/chat&sugerencias";
import AOS from "aos";

export const Chat = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");

  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );

  useEffect(() => {
    console.log("de:", sexo, " ", edad, " ", orientacion, " ", identidad);
    AOS.init();
    if (!sexo || !edad || !orientacion || !identidad) {
      navigate("/");
    } else {
      // if (!Object.entries(preguntas).length) {
      //   dispatch(
      //     getPreguntas({
      //       SexoId: [1],
      //       GenderIdentityId: [1],
      //       SexualOrientationId: [1],
      //     })
      //   );
      // }
    }
  }, []);

  return (
    <div className="chatCont ">
      <div className="avatarContChat " data-aos="fade-right">
        <AiOutlineArrowLeft
          className="arrowBtn"
          onClick={() => {
            navigate("/");
          }}
        />
        <img src={"avatar.png"} alt="avatar" className="avatarChat " />
      </div>
      <ChatandSugerencias />
    </div>
  );
};
