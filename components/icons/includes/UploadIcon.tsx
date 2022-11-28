import React from "react";
import { FC } from "react";

const UploadIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2z"
        fill="#000"
      />
      <path
        d="M8.41 8.41 11 5.83v9.67h2V5.83l2.59 2.58L17 7l-5-5-5 5 1.41 1.41z"
        fill="#000"
      />
    </svg>
  );
};

export { UploadIcon };
