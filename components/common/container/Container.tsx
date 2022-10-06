import React, { FC } from "react";
import { IContainer } from "./Container.d";
import Styles from "./Container.module.scss";

const Container: FC<IContainer> = ({
  children,
  className,
  el = "section",
  clean = true,
}) => {
  let arrStyles: string[] = [];
  for (let stylesKey in Styles) {
    arrStyles.push(stylesKey);
  }
  let arrClassName = className && className.split(" ");

  let arrRes =
    arrClassName &&
    arrClassName
      .map((e) =>
        arrStyles.filter((a) => a === e).toString()
          ? Styles[arrStyles.filter((a) => a === e).toString()]
          : className
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

export default Container;
