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
      className="modalCondi"
    >
      <div className="bg-primary tex-light" style={{ height: "100vh" }}>
        cargando...
      </div>
    </Modal>;
  } else if (contenido.status && contenido.status > 400) {
    <Modal
      show={show}
      onHide={handleOnhide}
      backdrop="static"
      keyboard={true}
      centered
      size="lg"
      className="modalCondi"
    >
      <div className="bg-dark " style={{ height: "100vh" }}>
        error...
      </div>
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
      className="modalCondi"
    >
      <div className="bg-dark contDeTema" style={{ height: "100vh" }}>
        {detalle && (
          <>
            <img
              src={detalle.mainImagen}
              alt={detalle.titulo}
              className="mainimgDetalleTema "
            />
            <div className="contContenidoDeTe">
              <div className="ContTituloDeTe">
                <h2>{detalle.titulo}</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
