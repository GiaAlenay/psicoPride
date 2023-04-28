import { BibliotecaTema, SlideOrderAttributes } from "../../interfaces";
import { DetalleTema } from "../DetalleTemaBiblioteca/detalleTema";
import "./sliderDetalle.css";
import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";

interface MyProps {
  show: boolean;
  atributos: BibliotecaTema;
  setShow: (value: boolean) => void;
  slideOrder: SlideOrderAttributes;
}
export const SliderDetalle: React.FC<MyProps> = ({
  show,
  atributos,
  setShow,
  slideOrder,
}) => {
  const [display, SetDisplay] = useState<string>("none");
  const [position, setPosition] = useState<string>("");
  const [showFullDetail, setShowFullDetail] = useState<boolean>(false);
  useEffect(() => {
    if (show) {
      SetDisplay("block");
    } else {
      setTimeout(() => {
        SetDisplay("none");
      }, 300);
    }
  }, [show]);

  useEffect(() => {
    for (const key in slideOrder) {
      if (slideOrder[key] === atributos.id) {
        setPosition(key);
      }
    }
  }, [atributos, slideOrder]);
  return (
    <div
      className={`SliderDetalleCont ${
        show ? "zoom-in" : "zoom-out"
      } slidePosi${position}`}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => setShow(false)}
      style={{ display: display }}
    >
      <img
        src={atributos.mainImagen}
        alt={atributos.titulo}
        className="mainImgSlideDet"
      />
      <div className="infoContSliderDe">
        <div className="tituloMoreBTnCont">
          <div>
            <h3>{atributos.titulo}</h3>
          </div>
          <div>
            <MdExpandMore
              className="moreDetalleBtn"
              onClick={() => {
                setShowFullDetail(true);
              }}
            />
          </div>
        </div>
      </div>
      <DetalleTema
        id={atributos.id}
        show={showFullDetail}
        setShow={() => {
          setShowFullDetail(false);
        }}
      />
    </div>
  );
};
