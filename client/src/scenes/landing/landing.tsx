import { ChatPresentation } from "../../components/chatPresentation/chatPresentations";
import { useEffect, useRef, useState } from "react";
import "./landing.css";
import { ChatBurbuja } from "../../components/chatBurbuja/chatBurbuja";
import { About } from "../../components/about/about";

export const Landing = () => {
  return (
    <div className="landingPag">
      <ChatPresentation />
      <ChatBurbuja />
      <About />
    </div>
  );
};
