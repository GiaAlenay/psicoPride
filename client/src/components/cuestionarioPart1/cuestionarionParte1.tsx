import { useEffect } from "react";
import "./cuestionario1.css";
import React from "react";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: string, isArray: boolean) => void;
}

export const CuestionarioParte1: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
}) => {
  const ages: string[] = [
    "-14",
    "15",
    "16",
    "17",
    "18–24",
    "25–29",
    "30–39",
    "40–49",
    "50–59",
    "60+",
  ];
  useEffect(() => {
    if (user.age) hanldledisable();
  }, [user]);

  return (
    <div className=" W-100 text-center " data-aos="flip-left">
      <h3>¿Cuál es tu edad?</h3>
      <div className="cards   d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {ages.map((a, i) => (
          <button
            key={i}
            className={`btnEdad ${user.age === a ? "btnSe" : "btnNoSE"}`}
            onClick={() => {
              setUser("age", a, false);
            }}
          >
            <h5>{a}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
