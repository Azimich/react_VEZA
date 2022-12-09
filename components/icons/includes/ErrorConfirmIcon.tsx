import React, { FC } from "react";

const ErrorConfirmIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="80" cy="80" r="80" fill="#FF0303" />
      <rect
        x="26.668"
        y="68.5718"
        width="106.667"
        height="22.8571"
        rx="11.4286"
        fill="white"
      />
    </svg>
  );
};

export { ErrorConfirmIcon };
