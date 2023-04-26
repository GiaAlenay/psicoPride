import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "./cuestionario.css";
import { CuestionarioParte1 } from "../../components/cuestionarioPart1/cuestionarionParte1";
import { CuestionarioParte2 } from "../../components/cuestionarioPart2/cuestionarionParte2";
import { CuestionarioParte3 } from "../../components/cuestionarioPart3/cuestionarionParte3";
import { CuestionarioParte4 } from "../../components/cuestionarioPart4/cuestionarionParte4";
import { Stepper } from "../../components/stepper/stepper";
import { UserAtributtes } from "../../interfaces";
import { Condiciones } from "../../components/condiciones/condicones";
import { RootState, AppDispatch } from "../../reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../components/loader/loaders";
import { Sexo } from "../../reduxToolkit/reducers/sexo";
import { Gender } from "../../reduxToolkit/reducers/gender";
import { Orientacion } from "../../reduxToolkit/reducers/orientacion";
import {
  getPreguntas,
  ChatGlobalState,
} from "../../reduxToolkit/reducers/chat";
import { getSexos } from "../../reduxToolkit/reducers/sexo";
import { getGenders } from "../../reduxToolkit/reducers/gender";
import { getOrientacions } from "../../reduxToolkit/reducers/orientacion";
import { sexo, identidad, orientacion, edad } from "../../localStorage";
export const Cuestionario = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { loadingPreguntas, preguntas } = useSelector<
    RootState,
    ChatGlobalState
  >((state) => state.chat);
  const sexos: Sexo[] = useSelector<RootState, Sexo[]>(
    (state) => state.sexo.data
  );
  const generos: Gender[] = useSelector<RootState, Gender[]>(
    (state) => state.gender.data
  );
  const orientaciones: Orientacion[] = useSelector<RootState, Orientacion[]>(
    (state) => state.orientacion.data
  );
  const [modal, setModal] = useState<boolean>(false);
  const [desbloqueados, setDesbloqueados] = useState<number[]>([1]);
  const [current, setCurrent] = useState<number>(1);
  const [disable, setdisable] = useState<boolean>(true);
  const [user, setUser] = useState<UserAtributtes>({});
  const [show, setShow] = useState<boolean>(true);

  const [otro, setOtro] = useState<string>("");
  const [otroOrientacion, setOtroOrientacion] = useState<string>("");
  useEffect(() => {
    AOS.init();
    if (sexo && edad && orientacion && identidad) {
      navigate("/chat");
    } else {
      if (!sexos.length || !generos.length || !orientaciones.length) {
        dispatch(getSexos());
        dispatch(getGenders());
        dispatch(getOrientacions());
      }
    }
  }, []);

  useEffect(() => {
    if (desbloqueados.find((n) => n === current + 1) || !disable) {
      setDesbloqueados([...desbloqueados, current + 1]);
    }
  }, [current, disable]);

  useEffect(() => {
    if (loadingPreguntas) {
      setModal(true);
    }
    if (preguntas.status === 201) {
      navigate("/chat");
    }
  }, [loadingPreguntas, preguntas]);

  useEffect(() => {
    for (const property in user) {
      console.log(user[property]);
      if (Array.isArray(user[property])) {
        localStorage.setItem(
          `${property}`,
          Array.isArray(user[property]) && user[property].join("-")
        );
      } else {
        localStorage.setItem(`${property}`, user[property].toString());
      }
    }
  }, [user]);

  const handleChangeUser = (
    name: string,
    value: number | string,
    isArray: boolean
  ) => {
    if (isArray) {
      if (Array.isArray(user[name]) && user[name].includes(value)) {
        setUser({
          ...user,
          [name]: Array.isArray(user[name])
            ? user[name].filter((u: number) => u !== value)
            : [value],
        });
      } else {
        setUser({
          ...user,
          [name]: Array.isArray(user[name]) ? [...user[name], value] : [value],
        });
      }
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleNext = () => {
    AOS.init();
    setdisable(true);
    if (current !== 4) {
      setCurrent(current + 1);
    } else {
      dispatch(
        getPreguntas({
          SexoId: user.SexoId,
          GenderIdentityId: user.GenderIdentityId,
          SexualOrientationId: user.SexualOrientationId,
        })
      );
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
      <Modal open={modal} option={"loader"} />
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
          setUser={(name: string, value: string, isArray: boolean) => {
            handleChangeUser(name, value, isArray);
          }}
          hanldledisable={() => {
            setdisable(false);
          }}
        />
      )}
      {current === 2 && (
        <CuestionarioParte2
          user={user}
          otro={otro}
          setOtro={(value: string) => {
            setOtro(value);
          }}
          setUser={(name: string, value: number, isArray: boolean) => {
            handleChangeUser(name, value, isArray);
          }}
          hanldledisable={() => {
            if (user.GenderIdentityId && user.GenderIdentityId?.length === 0) {
              setdisable(true);
              setDesbloqueados(desbloqueados.filter((d) => d !== 3));
            } else {
              setdisable(false);
              setDesbloqueados([...desbloqueados, 3]);
            }
          }}
        />
      )}
      {current === 3 && (
        <CuestionarioParte3
          user={user}
          otro={otroOrientacion}
          setOtro={(value: string) => {
            setOtroOrientacion(value);
          }}
          setUser={(name: string, value: number, isArray: boolean) => {
            handleChangeUser(name, value, isArray);
          }}
          hanldledisable={() => {
            if (
              user.SexualOrientationId &&
              user.SexualOrientationId?.length === 0
            ) {
              setdisable(true);
              setDesbloqueados(desbloqueados.filter((d) => d !== 4));
            } else {
              setdisable(false);
              setDesbloqueados([...desbloqueados, 4]);
            }
          }}
        />
      )}
      {current === 4 && (
        <CuestionarioParte4
          user={user}
          setUser={(name: string, value: number, isArray: boolean) => {
            handleChangeUser(name, value, isArray);
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
