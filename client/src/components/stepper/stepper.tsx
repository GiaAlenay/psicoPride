import "./stepper.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

interface MyComponentProps {
  setCurrent: (e: number) => void;
  current: number;
  desbloqueados: number[];
}

export const Stepper: React.FC<MyComponentProps> = ({
  setCurrent,
  current,
  desbloqueados,
}) => {
  const stepsArray: number[] = [1, 2, 3, 4];
  const [steps, setSteps] = useState(1);

  useEffect(() => {
    setSteps(current);
  }, [current]);

  const handleMoveSteps = (s: number) => {
    if (desbloqueados.find((n) => n > s)) {
      setCurrent(s);
      setSteps(s);
    } else {
      console.log("no entras");
      toast.warn("Completa el formaulario para avanzar.", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
      <div className="stepperCont d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        <div className="progresLineStep">
          <div
            className="progressDone "
            style={{ width: `${(steps - 1) * 33.3}%` }}
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
