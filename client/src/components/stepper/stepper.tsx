import "./stepper.css";
import { useState } from "react";

export const Stepper = () => {
  const stepsArray: number[] = [1, 2, 3, 4];
  const [steps, setSteps] = useState(1);
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
              setSteps(s);
            }}
          >
            <h6>{s}</h6>
          </button>
        ))}
      </div>
    </div>
  );
};
