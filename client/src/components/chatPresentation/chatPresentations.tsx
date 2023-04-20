import { ChatBurbuja } from "../chatBurbuja/chatBurbuja";
import React from "react";
import "./chatPresentation.css";
interface MyComponentProps {
  setLoader: () => void;
}
export const ChatPresentation: React.FC<MyComponentProps> = ({ setLoader }) => {
  return (
    <div className="chatPrePag">
      <div className="centerCPP ">
        <img src={"./logo.png"} alt={"logo"} className="logoPsicoPride" />
        <div className="promptCont">
          <div className="">
            <h2 className="bienvenidos">¡Bienvenid@ a Dilo Sin Paltas!</h2>
            <h3 className="moreinf">
              Un lugar donde tus preguntas sobre sexualidad encontrarán las
              respuestas correctas.
            </h3>
            <div className="w-100  d-flex justify-content-center align-items-center mx-auto p-4">
              <ChatBurbuja
                setLoader={() => {
                  setLoader();
                }}
              />
            </div>
          </div>
        </div>
        <div className="chatImgsCont">
          <img src={"chats.png"} alt={"chats"} className="imgChats" />
          <img src={"avatar.png"} alt={"avatar"} className="imgAvatar" />
        </div>
      </div>
    </div>
  );
};
