import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cuestionario.css";
import { CuestionarioParte1 } from "../../components/cuestionarioParte1/cuestionarionParte1";
import { CuestionarioParte2 } from "../../components/cuestionarioParte2/cuestionarionParte2";
import { CuestionarioParte3 } from "../../components/cuestionarioParte3/cuestionarionParte3";
import { CuestionarioParte4 } from "../../components/cuestionarioParte4/cuestionarionParte4";
import { Stepper } from "../../components/stepper/stepper";
import { UserAtributtes } from "../../interfaces";
import { Condiciones } from "../../components/condiciones/condicones";
import { RootState, AppDispatch } from "../../reduxToolkit/store";
import { createUser, UserGlobalState } from "../../reduxToolkit/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../components/loader/loaders";

export const Cuestionario = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { responseCreateUser, loadingCreateUser } = useSelector<
    RootState,
    UserGlobalState
  >((state) => state.user);
  const [modal, setModal] = useState<boolean>(false);
  const [desbloqueados, setDesbloqueados] = useState<number[]>([1]);
  const [current, setCurrent] = useState<number>(1);
  const [disable, setdisable] = useState<boolean>(true);
  const [user, setUser] = useState<UserAtributtes>({});
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (desbloqueados.find((n) => n === current + 1) || !disable) {
      setDesbloqueados([...desbloqueados, current + 1]);
    }
  }, [current, disable]);

  useEffect(() => {
    if (loadingCreateUser) {
      setModal(true);
    }
    if (responseCreateUser.status === 201) {
      navigate("/chat");
    }
  }, [loadingCreateUser, responseCreateUser]);

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
      dispatch(createUser(user));
    }
  };
  return (
    <div
      className="text-light bg-dark "
      style={{ minHeight: "100vh", paddingBottom: "3rem" }}
    >
      <Condiciones
        show={show}
        setShow={() => {
          setShow(false);
        }}
      />
      <Modal
        open={modal}
        option={`${responseCreateUser.status === 201 ? "loader" : "error"}`}
      />
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
        hanldledisable={() => {
          setdisable(true);
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
