import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState, AppDispatch } from "../../reduxToolkit/store";
import {
  ChatGlobalState,
  Response,
  getPreguntas,
} from "../../reduxToolkit/reducers/chat";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Chat = () => {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const sexo = localStorage.getItem("SexoId");
  const edad = localStorage.getItem("age");
  const orientacion = localStorage.getItem("SexualOrientationId");
  const identidad = localStorage.getItem("GenderIdentityId");

  const preguntas: Response = useSelector<RootState, Response>(
    (state) => state.chat.preguntas
  );

  const loadingPreguntas: boolean = useSelector<RootState, boolean>(
    (state) => state.chat.loadingPreguntas
  );

  useEffect(() => {
    return () => {
      navigate("/", { replace: true });
    };
  }, [location, navigate]);

  useEffect(() => {
    if (!sexo || !edad || !orientacion || !identidad) {
      navigate("/");
    } else {
      if (!Object.entries(preguntas).length) {
        dispatch(
          getPreguntas({
            SexoId: parseInt(sexo),
            GenderIdentityId: parseInt(identidad),
            SexualOrientationId: parseInt(orientacion),
          })
        );
      }
    }
  }, []);

  return (
    <div>
      <div>cdc</div>
      shashdbsdj chaaaat
    </div>
  );
};
