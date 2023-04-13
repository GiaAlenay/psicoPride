import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { getSexos, SexoState } from "../../reduxToolkit/reducers/sexo";
import { AppDispatch } from "../../reduxToolkit/store";
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
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector<RootState, SexoState>(
    (state) => state.sexo
  );

  useEffect(() => {
    dispatch(getSexos());
  }, [dispatch]);

  useEffect(() => {
    if (user.SexoId) {
      hanldledisable();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-100 text-center">
      <h3>¿Cuál es tu sexo?</h3>
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
            className={`btnSexo btn${sexo.name} ${
              user.SexoId === sexo.id && `sexoSe${sexo.name}`
            }`}
            onClick={() => {
              setUser("SexoId", sexo.id);
            }}
          >
            {sexo.name === "mujer" ? (
              <i
                className="bi bi-gender-female fa"
                style={{ fontSize: "100px" }}
              ></i>
            ) : sexo.name === "hombre" ? (
              <i
                className="bi bi-gender-male fa"
                style={{ fontSize: "100px" }}
              ></i>
            ) : (
              <i
                className="bi bi-gender-ambiguous fa"
                style={{ fontSize: "100px" }}
              ></i>
            )}
            <h5>{sexo.name}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
