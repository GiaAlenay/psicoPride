import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cuestionario.css";
import { CuestionarioParte1 } from "../../components/cuestionarioParte1/cuestionarionParte1";
import { CuestionarioParte2 } from "../../components/cuestionarioParte2/cuestionarionParte2";
import { CuestionarioParte3 } from "../../components/cuestionarioParte3/cuestionarionParte3";
import { CuestionarioParte4 } from "../../components/cuestionarioParte4/cuestionarionParte4";
import { Stepper } from "../../components/stepper/stepper";
import { UserAtributtes } from "../../interfaces";

export const Cuestionario = () => {
  const [desbloqueados, setDesbloqueados] = useState<number[]>([1]);
  const [current, setCurrent] = useState<number>(1);
  const [disable, setdisable] = useState<boolean>(true);
  const navigate = useNavigate();
  const [user, setUser] = useState<UserAtributtes>({});

  useEffect(() => {
    !desbloqueados.find((n) => n === current + 1) &&
      setDesbloqueados([...desbloqueados, current + 1]);
    console.log(desbloqueados);
  }, [current]);

  const handleChangeUser = (name: string, value: number) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleNext = () => {
    setdisable(true);
    if (current !== 4) {
      setCurrent(current + 1);
    } else {
      navigate("/chat");
    }
  };
  return (
    <div
      className="text-light bg-dark "
      style={{ minHeight: "100vh", paddingBottom: "3rem" }}
    >
      <img
        src={"logo.png"}
        alt={"psicoPride"}
        className="logoPsiPri"
        onClick={() => {
          navigate("/");
        }}
      />
      <Stepper
        current={current}
        desbloqueados={desbloqueados}
        setCurrent={(e: number) => {
          setCurrent(e);
        }}
      />

      {current === 1 && (
        <CuestionarioParte1
          user={user}
          setUser={(name: string, value: number) => {
            handleChangeUser(name, value);
          }}
          hanldledisable={() => {
            setdisable(false);
          }}
        />
      )}
      {current === 2 && (
        <CuestionarioParte2
          user={user}
          setUser={(name: string, value: number) => {
            handleChangeUser(name, value);
          }}
          hanldledisable={() => {
            setdisable(false);
          }}
        />
      )}
      {current === 3 && (
        <CuestionarioParte3
          user={user}
          setUser={(name: string, value: number) => {
            handleChangeUser(name, value);
          }}
          hanldledisable={() => {
            setdisable(false);
          }}
        />
      )}
      {current === 4 && (
        <CuestionarioParte4
          user={user}
          setUser={(name: string, value: number) => {
            handleChangeUser(name, value);
          }}
          hanldledisable={() => {
            setdisable(false);
          }}
        />
      )}
      <div className={`sgtBtnHolder`}>
        <button
          type="button"
          className="gradient-border"
          onClick={handleNext}
          disabled={disable}
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
