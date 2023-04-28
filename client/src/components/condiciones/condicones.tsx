import Modal from "react-bootstrap/Modal";
import React from "react";
import "./condiciones.css";

interface MyComponentProps {
  show: boolean;
  setShow: () => void;
}

export const Condiciones: React.FC<MyComponentProps> = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={setShow}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        className="modalCondi"
      >
        <div className="w-100 condicionesCont ">
          <div className="avatarContModal">
            <img src={"avatar.png"} alt={"avatar"} className="avatrModal" />
          </div>
          <div className="modalPrompCont">
            <div>
              <div className="bubble text-left">
                <div className="promptsModalCondi">
                  <h4>HOLA, SOY CONI {`:)`} </h4>
                  <h6>
                    Quiero conocerte un poco mejor para ayudarte. ¡Y no te
                    preocupes! Nuestra conversación es completamente
                    confidencial.
                  </h6>
                </div>
              </div>
              <div className="pointer"></div>
              <div className="notDisplayAcepBtn w-100 flex-row flex-wrap justify-content-center align-items-center mx-auto ">
                <button onClick={setShow} className="closeModalBtn">
                  Aceptar
                </button>
              </div>
            </div>
            <div className="avatarContModalHidden">
              <div>
                <img
                  src={"avatar.png"}
                  alt={"avatar"}
                  className="avatrModalHidden"
                />
              </div>
              <div className="w-100 d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
                <button onClick={setShow} className="closeModalBtn">
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
