import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { getGenders, GenderState } from "../../reduxToolkit/reducers/gender";
import { AppDispatch } from "../../reduxToolkit/store";
export const CuestionarioParte3 = () => {
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
    <div>
      <div>¿Cuál es tu identidad de genero?</div>
      <ul>
        {data.map((sexo: any) => (
          <li key={sexo.id}>
            <p>{sexo.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
