import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { getSexos, SexoState } from "../../reduxToolkit/reducers/sexo";
import { AppDispatch } from "../../reduxToolkit/store";
export const CuestionarioParte2 = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector<RootState, SexoState>(
    (state) => state.sexo
  );

  useEffect(() => {
    dispatch(getSexos());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>¿Cuál es tu sexo?</div>
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
