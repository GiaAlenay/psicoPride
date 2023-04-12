import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { getGenders, GenderState } from "../../reduxToolkit/reducers/gender";
import { AppDispatch } from "../../reduxToolkit/store";

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
      <div>
        {data.map((sexo: any) => (
          <button key={sexo.id}>
            <h5>{sexo.name}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};
