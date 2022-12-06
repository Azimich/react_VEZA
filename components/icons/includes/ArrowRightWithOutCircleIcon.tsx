import React, { FC } from "react";

const ArrowRightWithOutCircle: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M869 487.8L491.2 159.9C488.3 157.4 484.6 156 480.7 156H392.2C384.8 156 381.4 165.2 387 170L737.2 474H152C147.6 474 144 477.6 144 482V542C144 546.4 147.6 550 152 550H737.1L386.9 854C381.3 858.9 384.7 868 392.1 868H483.6C485.5 868 487.4 867.3 488.8 866L869 536.2C872.462 533.19 875.238 529.472 877.14 525.297C879.042 521.122 880.026 516.588 880.026 512C880.026 507.412 879.042 502.878 877.14 498.703C875.238 494.528 872.462 490.81 869 487.8V487.8Z"
        fill="black"
      ></path>
    </svg>
  );
};

export { ArrowRightWithOutCircle };
