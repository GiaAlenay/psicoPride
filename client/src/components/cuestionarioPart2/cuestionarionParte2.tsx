import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { GenderState } from "../../reduxToolkit/reducers/gender";
import "./cuestionario2.css";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: number, isArray: boolean) => void;
  otro: string;
  setOtro: (value: string) => void;
}

export const CuestionarioParte2: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
  otro,
  setOtro,
}) => {
  const miInput = useRef<HTMLInputElement>(null);
  const { data } = useSelector<RootState, GenderState>((state) => state.gender);

  useEffect(() => {
    if (user.GenderIdentityId) {
      hanldledisable();
    }
  }, [user]);
  useEffect(() => {
    if (miInput.current) {
      miInput.current.focus();
    }
  }, []);
  return (
    <div className="W-100 text-center" data-aos="flip-left">
      <h3>¿Cuál es tu identidad de género?</h3>
      <div className="cardsGenero d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {data.map((g: any) => (
          <>
            {g.name !== "Otro" && (
              <button
                key={g.id}
                className={`btnGenero ${
                  user.GenderIdentityId &&
                  user.GenderIdentityId.includes(g.id) &&
                  "selectedGen"
                }`}
                onClick={() => {
                  // localStorage.setItem("GenderIdentityId", g.id.toString());
                  setUser("GenderIdentityId", g.id, true);
                }}
              >
                <h5>{g.name}</h5>
              </button>
            )}
          </>
        ))}
      </div>
      <div className="d-flex w-100 justify-content-center align-items-center ">
        <div className="ContBtnOtro" style={{ position: "relative" }}>
          <button
            key={5}
            className={`btnGeneroOtro ${
              user.GenderIdentityId && user.GenderIdentityId.includes(5)
                ? "selectedGenOtro"
                : "notselectedGenOtro"
            }`}
            onClick={() => {
              localStorage.setItem("GenderIdentityId", "5");
              setUser("GenderIdentityId", 5, true);
              setTimeout(() => {
                if (miInput.current) {
                  miInput.current.focus();
                }
              }, 0);
            }}
          >
            <div
              className={`otroContGen ${
                user.GenderIdentityId && user.GenderIdentityId.includes(5)
                  ? "OtroContArriba"
                  : "OtroContCentro"
              }`}
            >
              <h5>Otro</h5>
            </div>
            <input
              ref={miInput}
              placeholder="escribe..."
              value={otro}
              onChange={(e) => {
                setOtro(e.target.value);
              }}
              type="text"
              className={`${
                user.GenderIdentityId && user.GenderIdentityId.includes(5)
                  ? "OtroinputArriba"
                  : "OtroinputDebajo"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
