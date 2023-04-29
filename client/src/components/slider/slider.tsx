import "./slider.css";
import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { BibliotecaTema } from "../../interfaces";
import { DetalleTema } from "../DetalleTemaBiblioteca/detalleTema";
interface MyProps {
  id: number;
  titulo: string;
  mainImagen: string;
  setShow: (value: boolean) => void;
  setAtributeSlice: (value: BibliotecaTema) => void;
}
export const SliderBiblioteca: React.FC<MyProps> = ({
  id,
  titulo,
  mainImagen,
  setShow,
  setAtributeSlice,
}) => {
  const [showFullDetail, setShowFullDetail] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
      {width > 800 ? (
        <div
          className="contSlider"
          key={id}
          onMouseEnter={() => {
            setShow(true);
            setAtributeSlice({ id, titulo, mainImagen });
          }}
          onMouseLeave={() => setShow(false)}
        >
          <div className="contSliceCenter">
            <img src={mainImagen} alt={titulo} className="mainImgSlider" />
          </div>
        </div>
      ) : (
        <div className="contSlider " key={id}>
          <div className=" contSliceCenterSmall bg-dark ">
            <img src={mainImagen} alt={titulo} className="mainImgSliderSmall" />
            <div className="infoContSliderDe">
              <div className="tituloMoreBTnCont">
                <div>
                  <h3>{titulo}</h3>
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
          </div>
        </div>
      )}
      <DetalleTema
        id={id}
        show={showFullDetail}
        setShow={() => {
          setShowFullDetail(false);
        }}
      />
    </>
  );
};
