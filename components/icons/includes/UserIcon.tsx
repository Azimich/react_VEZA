import React from "react";
import { FC } from "react";

const UserIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="search__icon"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.4314 17.328L21.4829 20.378C21.6253 20.5254 21.704 20.7227 21.7022 20.9275C21.7004 21.1324 21.6183 21.3283 21.4734 21.4732C21.3286 21.618 21.1326 21.7002 20.9278 21.702C20.7229 21.7038 20.5256 21.625 20.3783 21.4827L17.3267 18.4311C15.3326 20.1396 12.7542 21.0094 10.1326 20.8578C7.51109 20.7063 5.05012 19.5453 3.26614 17.6184C1.48216 15.6915 0.513845 13.1485 0.564383 10.523C0.614921 7.8976 1.68038 5.39377 3.5372 3.53695C5.39401 1.68014 7.89784 0.614677 10.5233 0.564139C13.1487 0.513601 15.6917 1.48192 17.6186 3.2659C19.5455 5.04988 20.7065 7.51085 20.8581 10.1324C21.0096 12.754 20.1399 15.3323 18.4314 17.3264V17.328ZM10.7189 19.3124C12.9981 19.3124 15.1839 18.407 16.7956 16.7953C18.4072 15.1837 19.3126 12.9978 19.3126 10.7186C19.3126 8.43943 18.4072 6.25357 16.7956 4.64193C15.1839 3.03029 12.9981 2.12488 10.7189 2.12488C8.43967 2.12488 6.25382 3.03029 4.64218 4.64193C3.03054 6.25357 2.12513 8.43943 2.12513 10.7186C2.12513 12.9978 3.03054 15.1837 4.64218 16.7953C6.25382 18.407 8.43967 19.3124 10.7189 19.3124V19.3124Z"
        fill="#2E6143"
      />
    </svg>
  );
};

export { UserIcon };
