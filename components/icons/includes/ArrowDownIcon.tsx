import React from "react";
import { FC } from "react";
import Styles from "./StylesIcon.module.scss";

const ArrowDownIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={Styles.arrowDownIcon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="white"></path>
    </svg>
  );
};

export { ArrowDownIcon };
