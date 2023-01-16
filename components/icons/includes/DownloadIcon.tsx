import React, { FC } from "react";

const DownloadIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.6875 17.25V20.125H4.3125V17.25H2.875V20.125C2.875 20.5062 3.02645 20.8719 3.29603 21.1415C3.56562 21.411 3.93125 21.5625 4.3125 21.5625H18.6875C19.0687 21.5625 19.4344 21.411 19.704 21.1415C19.9735 20.8719 20.125 20.5062 20.125 20.125V17.25H18.6875ZM18.6875 10.0625L17.6741 9.04906L12.2188 14.4972V1.4375H10.7812V14.4972L5.32594 9.04906L4.3125 10.0625L11.5 17.25L18.6875 10.0625Z"
        fill="black"
      ></path>
    </svg>
  );
};

export { DownloadIcon };
