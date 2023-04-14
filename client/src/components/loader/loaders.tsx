import React, { useState, useEffect } from "react";
import "./loader.css";
import { BiHappyBeaming } from "react-icons/bi";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
interface MyComponentProps {
  open: boolean;
  option: string;
}

export const Modal: React.FC<MyComponentProps> = ({ open, option }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (open) {
      AOS.init();
    }
  }, [open]);
  return (
    <div
      className="loaderCont"
      style={{
        width: `${open ? "100%" : "0%"}`,
      }}
    >
      {option === "loader" && (
        <span
          style={{ display: `${open ? "block" : "none"}` }}
          className="loader1"
        ></span>
      )}
      {option === "error" && (
        <div
          data-aos="flip-down"
          style={{ display: `${open ? "block" : "none"}` }}
          className="ResultCont ErrorCont"
        >
          <RiEmotionUnhappyLine size={200} />
          <div>
            <h3>Error</h3>
            <h6>Hubo un error intentelo denuevo.</h6>
            <button
              className="tryAgainBtn"
              onClick={() => {
                navigate("/quest");
              }}
            >
              <h6>Intentalo otra vez</h6>
            </button>
          </div>
        </div>
      )}
      {option === "success" && (
        <div
          style={{ display: `${open ? "block" : "none"}` }}
          className="ResultCont SuccesCont"
        >
          <BiHappyBeaming size={200} />
        </div>
      )}
    </div>
  );
};
