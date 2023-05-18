import React from "react";
import style from "../styles/Loading.module.css";

function Loading() {
  return (
    <svg className={style.ring} viewBox="25 25 50 50" stroke-width="5">
      <circle cx="50" cy="50" r="20" />
    </svg>
  );
}

export { Loading };
