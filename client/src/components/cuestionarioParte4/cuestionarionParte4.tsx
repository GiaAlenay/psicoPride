import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import {
  getOrientacions,
  OrientacionState,
} from "../../reduxToolkit/reducers/orientacion";
import { AppDispatch } from "../../reduxToolkit/store";

interface MyComponentProps {
  hanldledisable: () => void;
}

export const CuestionarioParte4: React.FC<MyComponentProps> = ({
  hanldledisable,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector<RootState, OrientacionState>(
    (state) => state.orientacion
  );

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
    <div>
      <div>¿Cuál es tu orientación sexual?</div>
      <ul>
        {data.map((o: any) => (
          <li key={o.id}>
            <p>{o.name}</p>
            <img src={o.flag} alt={o.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
