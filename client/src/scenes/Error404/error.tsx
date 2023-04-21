import { useNavigate } from "react-router-dom";
import "./error.css";
export const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-100 d-flex  justify-content-center align-items-center  mx-auto NotfoundCont"
      style={{ height: "100vh" }}
    >
      <div className="centerNotfound">
        <div className="ErrorPromptCont">
          <h2>Ups!!</h2>
          <h4>Pagina No Encontrada.</h4>
        </div>
        <button
          className="RegresarErrorBtn text-light"
          onClick={() => {
            navigate("/");
          }}
        >
          Regresar
        </button>
        <div className="Cont404">
          <span>404</span>
        </div>
      </div>
    </div>
  );
};
