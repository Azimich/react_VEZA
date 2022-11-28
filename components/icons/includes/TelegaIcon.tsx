import React from "react";
import { FC } from "react";

const TelegaIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.665 3.71694L2.93497 10.5539C1.72497 11.0399 1.73197 11.7149 2.71297 12.0159L7.26497 13.4359L17.797 6.79094C18.295 6.48794 18.75 6.65094 18.376 6.98294L9.84297 14.6839H9.84097L9.84297 14.6849L9.52897 19.3769C9.98897 19.3769 10.192 19.1659 10.45 18.9169L12.661 16.7669L17.26 20.1639C18.108 20.6309 18.717 20.3909 18.928 19.3789L21.947 5.15094C22.256 3.91194 21.474 3.35094 20.665 3.71694V3.71694Z"
        fill="black"
      />
    </svg>
  );
};

export { TelegaIcon };
