import React, { FC } from "react";
const CheckIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.35588 14.3345L1.61455 9.67002L0 11.2472L6.35588 17.5L20 4.07718L18.3968 2.5L6.35588 14.3345Z"
        fill="#505050"
      />
    </svg>
  );
};

export { CheckIcon };
