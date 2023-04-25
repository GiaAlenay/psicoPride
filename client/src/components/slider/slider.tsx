import "./slider.css";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
interface MyProps {
  id: number;
  titulo: string;
  mainImagen: string;
}
export const SliderBiblioteca: React.FC<MyProps> = ({
  id,
  titulo,
  mainImagen,
}) => {
  return (
    <div className="contSlider">
      <div className="contSliceCenter">
        <div className="contMainImg">
          <div>
            <img src={mainImagen} alt={titulo} className="mainImgSlider" />
          </div>
        </div>
        <div className="contitleSlider">
          <div>{titulo}</div>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <button className="rounded-circle buttonMoreSlider">
            <AiOutlinePlus size={32} className="moreIconSlider" />
          </button>
        </div>
      </div>
    </div>
  );
};
