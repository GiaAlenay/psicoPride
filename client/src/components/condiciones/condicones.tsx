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
                  <h4>Hola soy BlaBla </h4>
                  <h5>
                    Antes de comenzar me gustaria conocer algunas cosas acerca
                    de ti.
                  </h5>
                </div>
              </div>
              <div className="pointer"></div>
            </div>
            <div className="w-100 d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
              <button onClick={setShow} className="closeModalBtn">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
