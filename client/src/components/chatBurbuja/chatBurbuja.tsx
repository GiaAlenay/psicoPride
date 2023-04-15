import React, { useEffect, useState } from "react";
import "./chatBurbuja.css";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useDispatch } from "react-redux";
import { getSexos } from "../../reduxToolkit/reducers/sexo";
import { getGenders } from "../../reduxToolkit/reducers/gender";
import { getOrientacions } from "../../reduxToolkit/reducers/orientacion";
import { getPreguntas } from "../../reduxToolkit/reducers/chat";

interface MyComponentProps {
  setLoader: () => void;
}

export const ChatBurbuja: React.FC<MyComponentProps> = ({ setLoader }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [x, setX] = useState(1150);
  const [y, setY] = useState(400);
  const [clickChat, SetClickChat] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const loadingSexo = useSelector<RootState>((state) => state.sexo.loading);
  const loadingGender = useSelector<RootState>((state) => state.gender.loading);
  const loadingOrientacion = useSelector<RootState>(
    (state) => state.orientacion.loading
  );
  const loadingPreguntas = useSelector<RootState>(
    (state) => state.chat.loadingPreguntas
  );

  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width > 1100) {
      setX(width - 200);
    }
    if (width < 1100) {
      setX(width - 150);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setX(data.x);
    setY(data.y);
  };

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
      dispatch(
        getPreguntas({
          SexoId: parseInt(sexo),
          GenderIdentityId: parseInt(identidad),
          SexualOrientationId: parseInt(orientacion),
        })
      );
    } else {
      dispatch(getSexos());
      dispatch(getGenders());
      dispatch(getOrientacions());
    }

    SetClickChat(true);
  };

  return (
    <DraggableCore onDrag={handleDrag}>
      <div
        onClick={handleChatOrQuest}
        className="box"
        style={{ position: "absolute", left: x, top: y }}
      ></div>
    </DraggableCore>
  );
};
