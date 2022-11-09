import React from "react";
import { FC } from "react";

const MapIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="23"
      viewBox="0 0 264 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_247_2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M218.335 32.5318C168.697 -12.1965 92.8316 -10.6167 45.0987 36.1402C-0.760533 78.9038 -13.0871 146.71 14.783 202.88L130.995 417.982L241.432 220.205C277.446 159.703 267.945 82.4962 218.333 32.5334L218.335 32.5318ZM132.439 78.0061C163.135 78.0061 188.019 102.891 188.019 133.587C188.019 164.281 163.135 189.166 132.439 189.166C101.745 189.166 76.8599 164.281 76.8599 133.587C76.8599 102.891 101.745 78.0061 132.439 78.0061V78.0061Z"
          fill="#FEFEFE"
        ></path>
      </g>
    </svg>
  );
};

export { MapIcon };
