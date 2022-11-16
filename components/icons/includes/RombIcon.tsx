import React from "react";
import { FC } from "react";

const RombIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="4"
        width="5.65685"
        height="5.65685"
        rx="1"
        transform="rotate(45 4 0)"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export { RombIcon };
