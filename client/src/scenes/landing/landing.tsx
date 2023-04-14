import { ChatPresentation } from "../../components/chatPresentation/chatPresentations";
import { useEffect, useRef, useState } from "react";
import "./landing.css";
import { ChatBurbuja } from "../../components/chatBurbuja/chatBurbuja";
import { About } from "../../components/about/about";
import { Loader } from "../../components/loader/loaders";

export const Landing = () => {
  const [loader, setLoader] = useState<boolean>(false);
  return (
    <div className="landingPag">
      <Loader open={loader} />
      <ChatPresentation />
      <ChatBurbuja
        setLoader={() => {
          setLoader(true);
        }}
      />
      <About />
    </div>
  );
};
