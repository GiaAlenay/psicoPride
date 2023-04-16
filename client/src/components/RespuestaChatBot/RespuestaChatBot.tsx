import "./respuestaChatBot.css";
import React, { useState, useEffect } from "react";
interface MyComponentProps {
  saludo: string;
  orden: number;
  tiempo: number;
}
export const RespuestaChatBot: React.FC<MyComponentProps> = ({
  saludo,
  orden,
  tiempo,
}) => {
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (indice < texto.length) {
        setIndice(indice + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [indice, texto]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTexto(saludo);
    }, 2000 + tiempo * 100 + orden * 700);
    return () => clearTimeout(timer);
  }, [saludo]);
  return (
    <div className="respuestaChatBotCont">
      <div
        className="respuestaChatBot"
        style={{ display: `${texto.length === 0 ? "none" : "block"}` }}
      >
        {texto.substring(0, indice)}
      </div>
    </div>
  );
};
