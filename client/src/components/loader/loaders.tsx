import React, { useState } from "react";
import "./loader.css";
interface MyComponentProps {
  open: boolean;
}

export const Loader: React.FC<MyComponentProps> = ({ open }) => {
  return (
    <div
      className="loaderCont"
      style={{
        width: `${open ? "100%" : "0%"}`,
      }}
    >
      <span
        style={{ display: `${open ? "block" : "none"}` }}
        className="loader1"
      ></span>
    </div>
  );
};
