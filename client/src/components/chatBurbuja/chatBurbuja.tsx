import React, { useEffect, useState } from "react";
import "./chatBurbuja.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useDispatch } from "react-redux";
import { getSexos } from "../../reduxToolkit/reducers/sexo";
import { getGenders } from "../../reduxToolkit/reducers/gender";
import { getOrientacions } from "../../reduxToolkit/reducers/orientacion";
import { getPreguntas } from "../../reduxToolkit/reducers/chat";
//import { sexo, edad, orientacion, identidad } from "../../localStorage";
interface MyComponentProps {
  setLoader: () => void;
}

export const ChatBurbuja: React.FC<MyComponentProps> = ({ setLoader }) => {
  const navigate = useNavigate();
  const [clickChat, SetClickChat] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");
  const loadingSexo = useSelector<RootState>((state) => state.sexo.loading);
  const loadingGender = useSelector<RootState>((state) => state.gender.loading);
  const loadingOrientacion = useSelector<RootState>(
    (state) => state.orientacion.loading
  );
  const loadingPreguntas = useSelector<RootState>(
    (state) => state.chat.loadingPreguntas
  );

  useEffect(() => {
    if (clickChat) {
      if (
        loadingSexo ||
        loadingOrientacion ||
        loadingGender ||
        loadingPreguntas
      ) {
        setLoader();
      } else {
        setTimeout(() => {
          if (!sexo || !edad || !orientacion || !identidad) {
            navigate("/quest");
            console.log(
              "njaja:",
              sexo,
              " ",
              edad,
              " ",
              orientacion,
              " ",
              identidad
            );
          } else {
            navigate("/chat");
          }
        }, 1000);
      }
    }
  }, [
    clickChat,
    loadingSexo,
    loadingGender,
    loadingOrientacion,
    loadingPreguntas,
  ]);

  const handleChatOrQuest = () => {
    if (sexo && edad && orientacion && identidad) {
      console.log("uwuu");
      dispatch(
        getPreguntas({
          SexoId: sexo,
          GenderIdentityId: identidad,
          SexualOrientationId: orientacion,
        })
      );
    } else {
      console.log("nel");
      dispatch(getSexos());
      dispatch(getGenders());
      dispatch(getOrientacions());
    }

    SetClickChat(true);
  };

  return (
    <button className="button-75" onClick={handleChatOrQuest}>
      <span className="text">Chatear con X</span>
    </button>
  );
};
