import React, { FC } from "react";
import { useRouter } from "next/router";

import { ButtonI } from "./Button.d";

import Styles from "./Button.module.scss";

const Button: FC<ButtonI> = ({
  children,
  type = "button",
  disabled = false,
  onClick,
  theme = "banner",
  size = "medium",
  color = "green",
  link,
}) => {
  const router = useRouter();

  const onClickBtn =
    () => (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (link) {
        router?.push(`/${link}`);
      } else onClick(evt);
    };
  const themeSize = theme + "__" + size + "_" + color;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClickBtn()}
      data-test={`btn-${theme}`}
      className={`${Styles[theme]} ${Styles[themeSize]}`}
    >
      {children}
    </button>
  );
};

export { Button };
