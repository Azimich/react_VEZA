import React, { FC } from "react";

const AddIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.958984"
        y1="37.5004"
        x2="75.033"
        y2="37.5004"
        stroke="white"
      />
      <line x1="38.5" y1="0.963135" x2="38.5" y2="75.0372" stroke="white" />
    </svg>
  );
};

export { AddIcon };
