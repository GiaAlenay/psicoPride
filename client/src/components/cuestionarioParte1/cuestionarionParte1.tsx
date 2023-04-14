import { useState, useEffect } from "react";
import "./cuestionario1.css";
import React from "react";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: number) => void;
}

export const CuestionarioParte1: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
}) => {
  const ages: number[] = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  useEffect(() => {
    if (user.age) hanldledisable();
  }, [user]);

  return (
    <div className=" W-100 text-center">
      <h3>¿Cuál es tu edad?</h3>
      <div className="cards   d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {ages.map((a, i) => (
          <button
            key={i}
            className={`btnEdad ${user.age === a ? "btnSe" : "btnNoSE"}`}
            onClick={() => {
              localStorage.setItem("age", a.toString());
              setUser("age", a);
            }}
          >
            <h5>{a}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
