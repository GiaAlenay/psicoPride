import { ChatPresentation } from "../../components/chatPresentation/chatPresentations";
import { useEffect, useRef, useState } from "react";
import "./landing.css";
import { ChatBurbuja } from "../../components/chatBurbuja/chatBurbuja";

export const Landing = () => {
  return (
    <div className="landingPag">
      <ChatPresentation />
      <ChatBurbuja />
    </div>
  );
};
