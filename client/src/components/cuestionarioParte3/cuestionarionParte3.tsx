import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { getGenders, GenderState } from "../../reduxToolkit/reducers/gender";
import { AppDispatch } from "../../reduxToolkit/store";
import "./cuestionario3.css";

interface MyComponentProps {
  hanldledisable: () => void;
}

export const CuestionarioParte3: React.FC<MyComponentProps> = ({
  hanldledisable,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector<RootState, GenderState>(
    (state) => state.gender
  );
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (selected !== "") {
      hanldledisable();
    }
  }, [selected]);

  useEffect(() => {
    dispatch(getGenders());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="W-100 text-center">
      <h3>¿Cuál es tu identidad de genero?</h3>
      <div className="cardsGenero d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
        {data.map((g: any) => (
          <button
            key={g.id}
            className={`btnGenero`}
            onClick={() => {
              setSelected(g.name);
            }}
          >
            <h5>{g.name}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
