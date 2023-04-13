import "./chatPresentation.css";
export const ChatPresentation = () => {
  return (
    <div className="chatPrePag">
      <div className="centerCPP ">
        <img src={"./logo.png"} alt={"logo"} className="logoPsicoPride" />
        <div className="chatImgsCont">
          <img src={"chats.png"} alt={"chats"} className="imgChats" />
          <img src={"avatar.png"} alt={"avatar"} className="imgAvatar" />
        </div>
        <div className="promptCont">
          <div>
            <h2 className="bienvenidos">¡Bienvenid@ a Dilo Sin Paltas!</h2>
            <h3 className="moreinf">
              Un lugar donde tus preguntas sobre sexualidad encontrarán las
              respuestas correctas.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
