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
      </div>
    </div>
  );
};
