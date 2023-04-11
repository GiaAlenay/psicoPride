import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cuestionario.css";
import { CuestionarioParte1 } from "../../components/cuestionarioParte1/cuestionarionParte1";
import { CuestionarioParte2 } from "../../components/cuestionarioParte2/cuestionarionParte2";
import { CuestionarioParte3 } from "../../components/cuestionarioParte3/cuestionarionParte3";
import { CuestionarioParte4 } from "../../components/cuestionarioParte4/cuestionarionParte4";
export const Cuestionario = () => {
  const [current, setCurrent] = useState<number>(1);
  const navigate = useNavigate();
  const handleNext = () => {
    if (current !== 4) {
      setCurrent(current + 1);
    } else {
      navigate("/chat");
    }
  };
  return (
    <div className="text-light bg-dark " style={{ minHeight: "100vh" }}>
      <img
        src={"logo.png"}
        alt={"psicoPride"}
        className="logoPsiPri"
        onClick={() => {
          navigate("/");
        }}
      />
      {current === 1 && <CuestionarioParte1 />}
      {current === 2 && <CuestionarioParte2 />}
      {current === 3 && <CuestionarioParte3 />}
      {current === 4 && <CuestionarioParte4 />}
      <div className={`sgtBtnHolder`}>
        <button
          className="gradient-border"
          onClick={handleNext}
          disabled={true}
        >
          <div className="sgtInside bg-dark">
            <span>
              Siguiente <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span>
              <i className="bi bi-chevron-double-right"></i>{" "}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
