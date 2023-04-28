import Modal from "react-bootstrap/Modal";
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
      backdrop="static"
      keyboard={true}
      centered
      size="lg"
      className="modaldetalleTema"
    >
      <div className="bg-primary tex-light contDeTema">cargando...</div>
    </Modal>;
  } else if (contenido.status && contenido.status > 400) {
    <Modal
      show={show}
      onHide={handleOnhide}
      backdrop="static"
      keyboard={true}
      centered
      size="lg"
      className="modaldetalleTema"
    >
      <div className="bg-dark contDeTema">error...</div>
    </Modal>;
  }
  return (
    <Modal
      show={show}
      onHide={handleOnhide}
      backdrop="static"
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
