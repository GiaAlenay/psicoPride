import { ChatPresentation } from "../../components/chatPresentation/chatPresentations";
import { useState } from "react";
import "./landing.css";
import { About } from "../../components/about/about";
import { Modal } from "../../components/loader/loaders";
import { Biblioteca } from "../../components/bibioteca/biblioteca";

export const Landing = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="landingPag">
      <Modal open={modal} option={"loader"} />
      <ChatPresentation
        setLoader={() => {
          setModal(true);
        }}
      />

      <Biblioteca />

      <About />
    </div>
  );
};
