import "./respuestaChatBot.css";
import React, { useState, useEffect } from "react";
interface MyComponentProps {
  saludo: string;
}
export const RespuestaChatBot: React.FC<MyComponentProps> = ({ saludo }) => {
  const [respuesta, setRespuesta] = useState<string>("");

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (indice < saludo.length) {
        setIndice(indice + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [indice, saludo]);
  return (
    <div className="respuestaChatBotCont">
      <div className="respuestaChatBot">{saludo.substring(0, indice)}</div>
    </div>
  );
};
