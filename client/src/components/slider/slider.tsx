import "./slider.css";
import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BibliotecaTema } from "../../interfaces";
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
  // useEffect(() => {
  //   console.log(titulo);
  // }, []);
  return (
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
  );
};
