import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { SexoState } from "../../reduxToolkit/reducers/sexo";
import "./cuestionario4.css";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: number, isArray: boolean) => void;
}
export const CuestionarioParte4: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
}) => {
  const { data } = useSelector<RootState, SexoState>((state) => state.sexo);

  useEffect(() => {
    if (user.SexoId) {
      hanldledisable();
    }
  }, [user]);

  return (
    <div className="w-100 text-center" data-aos="flip-left">
      <h3>¿Eres intersexual?</h3>
      <div
        className="cardSexo d-flex
        flex-row
        flex-wrap
        justify-content-center
        align-items-center
        mx-auto
        p-3
        "
      >
        {data.map((sexo: any) => (
          <button
            key={sexo.id}
            className={`btnSexo btnintersex ${
              user.SexoId === sexo.id && `sexoSeintersex`
            }`}
            onClick={() => {
              localStorage.setItem("SexoId", sexo.id.toString());
              setUser("SexoId", sexo.id, false);
            }}
          >
            <h5>{sexo.name}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
