import "./stepper.css";
import { useState } from "react";

export const Stepper = () => {
  const [steps, setSteps] = useState(1);
  return (
    <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
      <div className="stepperCont d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        <button
          className="numberStep"
          onClick={() => {
            setSteps(1);
          }}
        >
          1
        </button>
        <div className="progresLineStep">
          <div
            className="progressDone"
            style={{ width: `${steps === 1 ? "0%" : "100%"}` }}
          ></div>
        </div>
        <button
          className="numberStep"
          onClick={() => {
            setSteps(2);
          }}
        >
          2
        </button>
      </div>
    </div>
  );
};
