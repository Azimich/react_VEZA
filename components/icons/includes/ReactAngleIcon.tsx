import React from "react";
import { FC } from "react";
import Styles from "./StylesIcon.module.scss";

const ReactAngleIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="406"
      height="309"
      viewBox="0 0 406 309"
      fill="none"
      {...props}
    >
      <path
        d="M0 0H406C317.471 24.0779 272.72 53.774 218.89 124.804C146.251 209.077 93.7173 269.673 0 309V0Z"
        fill="#009247"
      />
    </svg>
  );
};

export { ReactAngleIcon };
