import React, { FC } from "react";
import { useRouter } from "next/router";

import { ButtonI } from "./Button.d";

import Styles from "./Button.module.scss";

const Button: FC<ButtonI> = ({
  children,
  type = "button",
  disabled = false,
  onClick = () => {},
  theme = "banner",
  size = "medium",
  color = "green",
  link,
  ...attrs
}) => {
  const router = useRouter();

  const onClickBtn =
    () => (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (link) {
        router?.push(`/${link}`);
      } else return onClick(evt);
    };
  const themeSize = theme + "__" + size + "_" + color;
  return (
    <button
      {...attrs}
      type={type}
      disabled={disabled}
      onClick={onClickBtn()}
      data-test={`btn-${theme}`}
      className={`${Styles[themeSize]}`}
    >
      {children}
    </button>
  );
};

export { Button };
