import { useState } from "react";
import "./cuestionario1.css";
export const CuestionarioParte1 = () => {
  const ages: number[] = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className=" W-100 text-center">
      <h3>¿Cuál es tu edad?</h3>
      <div className="cards   d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {ages.map((a) => (
          <button
            className={`btnEdad ${selected === a ? "btnSe" : "btnNoSE"}`}
            onClick={() => {
              setSelected(a);
            }}
          >
            <h5>{a}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
