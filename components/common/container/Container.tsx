import React, { FC } from "react";
import { IContainer } from "./Container.d";
import Styles from "./Container.module.scss";

const Container: FC<IContainer> = ({
  children,
  className,
  el = "section",
  clean = true,
}) => {
  const arrStyles: string[] = [];
  for (const stylesKey in Styles) {
    arrStyles.push(stylesKey);
  }
  const arrClassName = className && className.split(" ");

  const arrRes =
    arrClassName &&
    arrClassName
      .map((e) =>
        arrStyles.filter((a) => a === e).toString()
          ? Styles[arrStyles.filter((a) => a === e).toString()]
          : className,
      )
      .toString()
      .replace(/,/g, " ");

  const rootClassName = clean
    ? arrRes
    : arrRes
    ? `${arrRes} ${Styles.container}`
    : Styles.container;

  return React.createElement(el, { className: rootClassName, children });
};

export { Container };
