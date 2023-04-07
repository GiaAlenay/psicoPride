import { useState } from "react";
export const CuestionarioParte1 = () => {
  const ages: number[] = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  return (
    <div>
      <div>¿Cuál es tu edad?</div>
      <div>
        {ages.map((a) => (
          <div>{a}</div>
        ))}
      </div>
    </div>
  );
};
