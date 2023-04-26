import "./stepper.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

interface MyComponentProps {
  setCurrent: (e: number) => void;
  current: number;
  desbloqueados: number[];
  hanldledisable: () => void;
}

export const Stepper: React.FC<MyComponentProps> = ({
  setCurrent,
  current,
  desbloqueados,
  hanldledisable,
}) => {
  const stepsArray: number[] = [1, 2, 3, 4];

  useEffect(() => {}, [current]);

  const handleMoveSteps = (s: number) => {
    if (desbloqueados.find((n) => n === s)) {
      setCurrent(s);
      hanldledisable();
    } else {
      toast.warn("Completa el formaulario para avanzar.", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto py-3">
      <div className="stepperCont d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        <div className="progresLineStep">
          <div
            className="progressDone "
            style={{ width: `${(current - 1) * 33.3}%` }}
          ></div>
        </div>
        {stepsArray.map((s, i) => (
          <button
            key={i}
            className={`numberStep numberStep${s}`}
            onClick={() => {
              handleMoveSteps(s);
            }}
          >
            <h6>{s}</h6>
          </button>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
