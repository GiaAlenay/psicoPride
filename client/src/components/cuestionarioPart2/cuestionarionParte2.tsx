import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { GenderState } from "../../reduxToolkit/reducers/gender";
import "./cuestionario2.css";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: number) => void;
}

export const CuestionarioParte2: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
}) => {
  const { data } = useSelector<RootState, GenderState>((state) => state.gender);

  useEffect(() => {
    if (user.GenderIdentityId) {
      hanldledisable();
    }
  }, [user]);

  return (
    <div className="W-100 text-center" data-aos="flip-left">
      <h3>¿Cuál es tu identidad de genero?</h3>
      <div className="cardsGenero d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {data.map((g: any) => (
          <button
            key={g.id}
            className={`btnGenero ${
              user.GenderIdentityId === g.id && "selectedGen"
            }`}
            onClick={() => {
              localStorage.setItem("GenderIdentityId", g.id.toString());
              setUser("GenderIdentityId", g.id);
            }}
          >
            <h5>{g.name}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
