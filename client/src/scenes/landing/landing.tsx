import { ChatPresentation } from "../../components/chatPresentation/chatPresentations";
import { useEffect, useRef, useState } from "react";
import "./landing.css";
import { ChatBurbuja } from "../../components/chatBurbuja/chatBurbuja";
import { About } from "../../components/about/about";
import { Modal } from "../../components/loader/loaders";
import { Scrollbars } from "react-custom-scrollbars-2";

export const Landing = () => {
  const [modal, setModal] = useState<boolean>(false);
  const scrollbarsRef = useRef<Scrollbars>(null);

  const thumbVerticalStyles = {
    backgroundColor: "rgba(50, 50, 93, 0.6)",
    borderRadius: 10,
    width: "100px",
  };

  const renderThumbVertical = ({ style, ...props }: any) => {
    const finalStyle = { ...style, ...thumbVerticalStyles };
    return <div style={finalStyle} {...props} />;
  };
  // useEffect(() => {
  //   localStorage.removeItem("SexoId");
  //   localStorage.removeItem("age");
  //   localStorage.removeItem("SexualOrientationId");
  //   localStorage.removeItem("GenderIdentityId");
  // }, []);
  return (
    <div className="landingPag">
      <Scrollbars
        ref={scrollbarsRef}
        style={{ width: "100%", height: "100%" }}
        renderThumbVertical={renderThumbVertical}
      >
        <Modal open={modal} option={"loader"} />
        <ChatPresentation />
        <ChatBurbuja
          setLoader={() => {
            setModal(true);
          }}
        />
        <About />
      </Scrollbars>
    </div>
  );
};
