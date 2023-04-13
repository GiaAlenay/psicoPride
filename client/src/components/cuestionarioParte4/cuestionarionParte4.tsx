import React, { useState, MouseEvent } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import "./cuestionario4.css";
import {
  getOrientacions,
  OrientacionState,
} from "../../reduxToolkit/reducers/orientacion";
import { AppDispatch } from "../../reduxToolkit/store";
import { UserAtributtes } from "../../interfaces";

interface MyComponentProps {
  hanldledisable: () => void;
  user: UserAtributtes;
  setUser: (name: string, value: number) => void;
}

export const CuestionarioParte4: React.FC<MyComponentProps> = ({
  hanldledisable,
  user,
  setUser,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector<RootState, OrientacionState>(
    (state) => state.orientacion
  );

  useEffect(() => {
    if (user.SexualOrientationId) {
      hanldledisable();
    }
  }, [user]);

  useEffect(() => {
    dispatch(getOrientacions());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-100 text-center">
      <h3>¿Cuál es tu orientación sexual?</h3>
      <div className="cardsOrientaciones d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {data.map((o: any) => (
          <button
            key={o.id}
            className={`btnOrientacion ${
              user.SexualOrientationId === o.id && "btnOriSel"
            } d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto`}
            onClick={() => {
              setUser("SexualOrientationId", o.id);
            }}
            name={o.name}
          >
            <div className="insideOriBtn">
              <div className="selectedCont">
                <input
                  type="checkbox"
                  className={``}
                  checked={user.SexualOrientationId === o.id ? true : false}
                />
                <h5 className="w-100">{o.name}</h5>
              </div>
              <img src={o.flag} alt={o.name} className="flagImg" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
