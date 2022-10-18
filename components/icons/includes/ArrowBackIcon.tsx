import React from "react";
import { FC } from "react";

const ArrowBackIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.458 5L4.16634 12L11.458 19M20.833 12H4.16634H20.833Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export { ArrowBackIcon };
