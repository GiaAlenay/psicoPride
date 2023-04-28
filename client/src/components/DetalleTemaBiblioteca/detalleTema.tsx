import Modal from "react-bootstrap/Modal";
import Placeholder from "react-bootstrap/Placeholder";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector, useDispatch } from "react-redux";
import { BibliotecaTema } from "../../interfaces";
import {
  TemaGlobalState,
  getContenido,
  vaciarContenido,
} from "../../reduxToolkit/reducers/biblioteca";
import "./detalleTema.css";
import { AiOutlineReload, AiOutlineClose } from "react-icons/ai";
interface MyComponentProps {
  id: number;
  show: boolean;
  setShow: () => void;
}

export const DetalleTema: React.FC<MyComponentProps> = ({
  show,
  setShow,
  id,
}) => {
  const [detalle, setDetalle] = useState<BibliotecaTema | null>(null);
  const [contenidoTexto, SetContenidoTexto] = useState<(string | string[])[]>(
    []
  );
  const dispatch: AppDispatch = useDispatch();
  const { loadingContenido, contenido } = useSelector<
    RootState,
    TemaGlobalState
  >((state) => state.biblioteca);
  useEffect(() => {
    if (id) {
      dispatch(getContenido(id));
    }
  }, [id]);

  useEffect(() => {
    if (contenido.data && !Array.isArray(contenido.data)) {
      setDetalle(contenido.data);
      if (contenido.data.contenido) {
        SetContenidoTexto(contenido.data.contenido);
      }
    }
  }, [contenido]);
  const handleOnhide = () => {
    dispatch(vaciarContenido());
    setShow();
  };
  if (loadingContenido || !detalle) {
    <Modal
      show={show}
      onHide={handleOnhide}
      keyboard={true}
      centered
      size="lg"
      className="modaldetalleTema"
    >
      <div className="bg-dark contDeTemaLoding">
        <Placeholder animation="glow" className=" h-100">
          <Placeholder xs={12} bg="secondary" className={"loadingImgDe"} />
          <div className="w-100 " style={{ marginTop: "5vh" }}>
            <Placeholder bg="secondary" className={"loadingParagraph"} />
            <Placeholder bg="secondary" className={"loadingParagraph"} />
            <Placeholder bg="secondary" className={"loadingParagraph"} />
          </div>
          <div className="w-100 " style={{ marginTop: "5vh" }}>
            <Placeholder bg="secondary" className={"loadingParagraph"} />
            <Placeholder bg="secondary" className={"loadingParagraph"} />
            <Placeholder bg="secondary" className={"loadingParagraph"} />
          </div>
          <div className="w-100 " style={{ marginTop: "5vh" }}>
            <Placeholder bg="secondary" className={"loadingParagraph"} />
            <Placeholder bg="secondary" className={"loadingParagraph"} />
            <Placeholder bg="secondary" className={"loadingParagraph"} />
          </div>
        </Placeholder>
      </div>
    </Modal>;
  } else if (contenido.status && contenido.status > 400) {
    <Modal
      show={show}
      onHide={handleOnhide}
      keyboard={true}
      centered
      size="lg"
      className="modaldetalleTemaError"
    >
      <div className="bg-dark w-100 detalleTemaError d-flex justify-content-center align-items-center mx-auto">
        <AiOutlineClose onClick={handleOnhide} className="closeBtnDeTema" />
        <div style={{ maxWidth: "90%" }}>
          <h5>
            {contenido.message
              ? contenido.message
              : "Error Obteniendo Tema, intente de nuevo."}
          </h5>
          <div className="w-100 d-flex justify-content-center align-items-center mx-auto">
            <button
              onClick={() => {
                dispatch(getContenido(id));
              }}
              className="retryBtnTema"
            >
              Reintentar <AiOutlineReload />
            </button>
          </div>
        </div>
      </div>
    </Modal>;
  }
  return (
    <Modal
      show={show}
      onHide={handleOnhide}
      keyboard={true}
      centered
      size="lg"
      className="modaldetalleTema"
    >
      {detalle && (
        <div className="bg-dark contDeTema">
          <img
            src={detalle.mainImagen}
            alt={detalle.titulo}
            className="mainimgDetalleTema "
          />
          <div className="contContenidoDeTe">
            <AiOutlineClose onClick={handleOnhide} className="closeBtnDeTema" />
            <div className="ContTituloDeTe">
              <h2>{detalle.titulo}</h2>
            </div>
            <div className="ContAllParagraphs">
              {contenidoTexto.map((cont, i) => (
                <div key={i}>
                  {Array.isArray(cont) ? (
                    <div className="ContParagraphLista">
                      {cont.map((c, a) => (
                        <div key={a} className="ContContParagraph">
                          <div className="ContadorParag">{a + 1}</div>
                          <div>{c}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`contParagraph contParagraph${i + 1}`}>
                      {cont}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
