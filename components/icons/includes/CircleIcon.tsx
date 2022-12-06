import React, { FC } from "react";
import Styles from "./StylesIcon.module.scss";
const CircleIcon: FC = () => {
  return (
    <svg className={Styles.progressbar} viewBox="0 0 64 64">
      <circle
        className={Styles.progressbar__track}
        cx="50%"
        cy="50%"
        r="30"
      ></circle>
      <circle
        className={`${Styles.progressbar__thumb} progressbar__thumb`}
        data-circle="185"
        cx="50%"
        cy="50%"
        r="30"
      ></circle>
      <text x="32" y="33" textAnchor="middle" dominantBaseline="middle"></text>
    </svg>
  );
};

export { CircleIcon };
