import { ChatPresentation } from "../../components/chatPresentation/chatPresentations";
import { useEffect, useRef, useState } from "react";
import "./landing.css";
import { ChatBurbuja } from "../../components/chatBurbuja/chatBurbuja";
import { About } from "../../components/about/about";
import { Modal } from "../../components/loader/loaders";

export const Landing = () => {
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    localStorage.removeItem("SexoId");
    localStorage.removeItem("age");
    localStorage.removeItem("SexualOrientationId");
    localStorage.removeItem("GenderIdentityId");
  }, []);
  return (
    <div className="landingPag">
      <Modal open={modal} option={"loader"} />
      <ChatPresentation />
      <ChatBurbuja
        setLoader={() => {
          setModal(true);
        }}
      />
      <About />
    </div>
  );
};
