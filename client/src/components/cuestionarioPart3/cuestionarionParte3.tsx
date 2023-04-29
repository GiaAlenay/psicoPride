import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import "./cuestionario3.css";
import { OrientacionState } from "../../reduxToolkit/reducers/orientacion";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: number, isArray: boolean) => void;
  otro: string;
  setOtro: (value: string) => void;
}

export const CuestionarioParte3: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
  otro,
  setOtro,
}) => {
  const { data } = useSelector<RootState, OrientacionState>(
    (state) => state.orientacion
  );
  const [otroID, setOtroID] = useState<number>(0);
  const miInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (user.SexualOrientationId) {
      hanldledisable();
    }
  }, [user]);
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const otro = data.find((e) => e.name === "Otro");
      if (otro) {
        setOtroID(otro.id);
      } else {
        setOtroID(7);
      }
    }
  }, [data]);
  return (
    <div className="w-100 text-center " data-aos="flip-left">
      <h3>¿Cuál es tu orientación sexual?</h3>
      <div className="cardsOrientaciones d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {data.map((o: any) => (
          <>
            {o.name !== "Otro" && (
              <button
                key={o.id}
                className={`btnOrientacion ${
                  user.SexualOrientationId &&
                  user.SexualOrientationId.includes(o.id) &&
                  "btnOriSel"
                } d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto`}
                onClick={() => {
                  setUser("SexualOrientationId", o.id, true);
                }}
                name={o.name}
              >
                <div className="insideOriBtn">
                  <div className="selectedCont">
                    <input
                      type="checkbox"
                      className={``}
                      checked={
                        user.SexualOrientationId &&
                        user.SexualOrientationId.includes(o.id)
                          ? true
                          : false
                      }
                    />
                    <h5 className="w-100">{o.name}</h5>
                  </div>
                  {o.name !== "Heterosexual" && (
                    <img src={o.flag} alt={o.name} className="flagImg" />
                  )}
                </div>
              </button>
            )}
          </>
        ))}

        <button
          className={`btnOrientacion ${
            user.SexualOrientationId &&
            user.SexualOrientationId.includes(otroID) &&
            "btnOriSel"
          } d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto`}
          onClick={() => {
            setUser("SexualOrientationId", otroID, true);
            setTimeout(() => {
              if (miInput.current) {
                miInput.current.focus();
              }
            }, 0);
          }}
          name={"Otro"}
        >
          <div className="insideOriBtn">
            <div className="selectedCont">
              <input
                type="checkbox"
                className={``}
                checked={
                  user.SexualOrientationId &&
                  user.SexualOrientationId.includes(otroID)
                    ? true
                    : false
                }
              />
              <h5 className="w-100">Otro</h5>
            </div>
            <input
              ref={miInput}
              placeholder="escribir orientación..."
              value={otro}
              onChange={(e) => {
                setOtro(e.target.value);
              }}
              type="text"
              className={`flagImg ${
                user.SexualOrientationId &&
                user.SexualOrientationId.includes(otroID)
                  ? "OtroinputArriba"
                  : "OtroinputDebajo"
              }`}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
