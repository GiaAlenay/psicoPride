import React, { useEffect, useState } from "react";
import "./chatBurbuja.css";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";
import { useNavigate } from "react-router-dom";

export const ChatBurbuja: React.FC = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [x, setX] = useState(1150);
  const [y, setY] = useState(400);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(width);
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

  const handleChatOrQuest = () => {
    const sexo = localStorage.getItem("sexo");
    const edad = localStorage.getItem("edad");
    const orientacion = localStorage.getItem("orientacion");
    const identidad = localStorage.getItem("identidad");
    if (!sexo || !edad || !orientacion || !identidad) {
      navigate("/quest");
    } else {
      navigate("/chat");
    }
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
