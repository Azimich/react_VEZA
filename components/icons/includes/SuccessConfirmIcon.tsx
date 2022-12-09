import React, { FC } from "react";

const SuccessConfirmIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="80" cy="80" r="80" fill="#2B8A3E" />
      <path
        d="M51 82.5L73.5 104L111 61"
        stroke="white"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SuccessConfirmIcon };
