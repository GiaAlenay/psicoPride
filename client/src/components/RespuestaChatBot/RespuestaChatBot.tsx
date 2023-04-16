import "./respuestaChatBot.css";
import React, { useState, useEffect } from "react";
interface MyComponentProps {
  saludo: string[];
}
export const RespuestaChatBot: React.FC<MyComponentProps> = ({ saludo }) => {
  const [respuesta, setRespuesta] = useState<string>("");

  const [texto, setTexto] = useState("Hola, mundo!");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (indice < texto.length) {
        setIndice(indice + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [indice, texto]);
  return (
    <div className="respuestaChatBotCont">
      <div className="respuestaChatBot">{texto.substring(0, indice)}</div>
      {/* <div className="respuestaChatBot b14">
        Hola!dd kdjshd kdd v dshg k ksd vh sd dh h dhj{" "}
      </div> */}
    </div>
  );
};
