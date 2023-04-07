import React, { useEffect, useState } from "react";
import "./chatBurbuja.css";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";

interface DraggableBoxProps {
  initialX: number;
  initialY: number;
}

export const ChatBurbuja: React.FC = () => {
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
  return (
    <DraggableCore onDrag={handleDrag}>
      <div
        className="box"
        style={{ position: "absolute", left: x, top: y }}
      ></div>
    </DraggableCore>
  );
};
